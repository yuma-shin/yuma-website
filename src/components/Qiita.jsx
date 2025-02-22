'use client'

import { useEffect, useState } from 'react'
import { LinkCard } from './LinkCard'

export function Qiita() {
  const [qiitadata, setQiitaData] = useState(null)

  useEffect(() => {
    async function fetchQiitadata() {
      try {
        const response = await fetch(
          `https://qiita.com/api/v2/authenticated_user/items?per_page=4`,
          {
            method: 'GET',
            headers: {
              Authorization:
                'Bearer ' + process.env.NEXT_PUBLIC_QIITA_ACCESS_TOKEN,
              'Content-Type': 'application/json',
            },
          },
        )
        const datas = await response.json()

        let urls = []
        datas.map((data) => {
          urls.push(data.url)
        })
        setQiitaData(urls)
      } catch (error) {
        console.error('Failed to fetch qiita data', error)
      }
    }

    fetchQiitadata()
  }, [])

  if (!qiitadata) return <p>Loading...</p>

  return (
    <>
      {qiitadata.map((url, index) => (
        <div key={index}>
          <LinkCard url={url} />
        </div>
      ))}
    </>
  )
}
