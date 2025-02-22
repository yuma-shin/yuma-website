import metadataScraper from 'metadata-scraper'

export const runtime = 'nodejs'
export async function GET(req) {
  const { searchParams } = new URL(req.url, process.env.NEXT_PUBLIC_BASE_URL)
  const url = searchParams.get('url')

  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), {
      status: 400,
    })
  }

  try {
    const metadata = await metadataScraper(url)
    return new Response(JSON.stringify(metadata), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch metadata' }), {
      status: 500,
    })
  }
}
