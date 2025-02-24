import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs' // Edge ではなく Node.js ランタイムを使用

const metaDataRules = {
  title: [
    'meta[property="og:title"]',
    'meta[name="og:title"]',
    'meta[property="twitter:title"]',
    'meta[name="twitter:title"]',
    'meta[property="parsely-title"]',
    'meta[name="parsely-title"]',
    'meta[property="sailthru.title"]',
    'meta[name="sailthru.title"]',
    'title',
  ],
  description: [
    'meta[property="og:description"]',
    'meta[name="og:description"]',
    'meta[property="description" i]',
    'meta[name="description" i]',
    'meta[property="sailthru.description"]',
    'meta[name="sailthru.description"]',
    'meta[property="twitter:description"]',
    'meta[name="twitter:description"]',
    'meta[property="summary" i]',
    'meta[name="summary" i]',
  ],
  language: [
    'html[lang]',
    'meta[property="language" i]',
    'meta[name="language" i]',
    'meta[property="og:locale"]',
    'meta[name="og:locale"]',
  ],
  url: [
    'meta[property="og:url"]',
    'meta[name="og:url"]',
    'meta[property="al:web:url"]',
    'meta[name="al:web:url"]',
    'meta[property="parsely-link"]',
    'meta[name="parsely-link"]',
    'a.amp-canurl[href]',
    'link[rel="canonical"]',
  ],
  provider: [
    'meta[property="og:site_name"]',
    'meta[name="og:site_name"]',
    'meta[property="publisher" i]',
    'meta[name="publisher" i]',
    'meta[property="application-name" i]',
    'meta[name="application-name" i]',
  ],
  twitter: ['meta[property="twitter:site"]', 'meta[name="twitter:site"]'],
  image: [
    'meta[property="og:image:secure_url"]',
    'meta[name="og:image:secure_url"]',
    'meta[property="og:image:url"]',
    'meta[name="og:image:url"]',
    'meta[property="og:image"]',
    'meta[name="og:image"]',
    'meta[property="twitter:image"]',
    'meta[name="twitter:image"]',
    'meta[property="twitter:image:src"]',
    'meta[name="twitter:image:src"]',
  ],
  icon: [
    'link[rel="apple-touch-icon"]',
    'link[rel="apple-touch-icon-precomposed"]',
    'link[rel="icon" i]',
    'link[rel="fluid-icon"]',
    'link[rel="shortcut icon"]',
    'link[rel="Shortcut Icon"]',
    'link[rel="mask-icon"]',
  ],
}

function extractMetaData($, rules, defaultValue = null) {
  for (const selector of rules) {
    const element = $(selector).first()
    if (element.length) {
      return (
        element.attr('content') || element.attr('href') || element.text().trim()
      )
    }
  }
  return defaultValue
}

// robots.txtに準拠しているか確認する
async function isAllowedByRobotsTxt(url, userAgent = 'MyCustomBot') {
  try {
    const robotsUrl = new URL('/robots.txt', url).href
    //console.log(`Fetching: ${robotsUrl}`)

    const response = await fetch(robotsUrl)
    if (!response.ok) {
      //console.log(`robots.txt を取得できなかった (${response.status}) : ${url}`)
      return true
    }

    const text = await response.text()
    //console.log(`robots.txt の内容:\n${text}`)

    const lines = text.split('\n')
    const disallowedPaths = []
    const allowedPaths = []
    let applicable = false

    for (const line of lines) {
      const trimmedLine = line.trim()

      if (trimmedLine.startsWith('User-agent:')) {
        applicable =
          trimmedLine.split(':')[1].trim() === '*' ||
          trimmedLine.includes(userAgent)
      } else if (applicable && trimmedLine.startsWith('Disallow:')) {
        const path = trimmedLine.split(':')[1].trim()
        if (path) disallowedPaths.push(path.replace('*', '.*')) // 正規表現に対応
      } else if (applicable && trimmedLine.startsWith('Allow:')) {
        const path = trimmedLine.split(':')[1].trim()
        if (path) allowedPaths.push(path.replace('*', '.*')) // 正規表現に対応
      }
    }

    //console.log(`Disallow ルール: ${disallowedPaths}`)
    //console.log(`Allow ルール: ${allowedPaths}`)

    const parsedUrl = new URL(url)
    const pathname = parsedUrl.pathname + parsedUrl.search // クエリパラメータを考慮
    //console.log(`チェック対象パス: ${pathname}`)

    // `Disallow` ルールの適用チェック
    const isDisallowed = disallowedPaths.some((pattern) =>
      new RegExp(`^${pattern}`).test(pathname),
    )

    // `Allow` ルールの適用チェック（`Disallow` より優先する場合）
    const isAllowed = allowedPaths.some((pattern) =>
      new RegExp(`^${pattern}`).test(pathname),
    )

    const isBlocked = isDisallowed && !isAllowed

    //console.log(`robots.txt チェック結果 (${url}): ${isBlocked ? 'ブロック' : '許可'}`,)
    return !isBlocked
  } catch (error) {
    console.warn('robots.txt チェックでエラー:', error)
    return true
  }
}

// 相対URLを絶対URLに変換する関数
function makeAbsoluteUrl(baseUrl, relativeUrl) {
  if (!relativeUrl) return null
  try {
    return new URL(relativeUrl, baseUrl).href
  } catch (error) {
    return relativeUrl
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get('url')

    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // robots.txtに準拠しているかの確認
    const allowed = await isAllowedByRobotsTxt(url)
    if (!allowed) {
      return new Response(JSON.stringify({ error: 'Blocked by robots.txt' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // 外部サイトの HTML を取得
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      }, // User-Agent を設定（403 回避）
    })
    if (!response.ok) {
      throw new Error('Failed to fetch the page')
    }
    const html = await response.text()
    const $ = cheerio.load(html)

    // メタデータを抽出
    const metadata = {
      title: extractMetaData($, metaDataRules.title),
      description: extractMetaData($, metaDataRules.description),
      language:
        extractMetaData($, metaDataRules.language)?.split('-')[0] || null,
      url: extractMetaData($, metaDataRules.url, url),
      provider: extractMetaData(
        $,
        metaDataRules.provider,
        new URL(url).hostname,
      ),
      twitter: extractMetaData($, metaDataRules.twitter),
      image: extractMetaData($, metaDataRules.image),
      icon: makeAbsoluteUrl(
        url,
        extractMetaData($, metaDataRules.icon, '/favicon.ico'),
      ),
    }

    return new Response(JSON.stringify(metadata, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 必要に応じて設定
      },
    })
  } catch (error) {
    console.error('Error fetching metadata:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch metadata' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
