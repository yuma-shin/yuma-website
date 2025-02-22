'use client'

import { useEffect, useState } from 'react'

function LinkCard({ url }) {
  const [metadata, setMetadata] = useState(null)

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const response = await fetch(
          `/api/metadata?url=${encodeURIComponent(url)}`,
        )
        const data = await response.json()
        setMetadata(data)
      } catch (error) {
        console.error('Failed to fetch metadata', error)
      }
    }

    fetchMetadata()
  }, [url])

  if (!metadata) return <p>Loading...</p>

  return (
    <a
      href={metadata.url}
      className="max-w block rounded-2xl bg-white px-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
      target="_blank"
    >
      <div className="flex items-center space-x-4">
        {metadata.image && (
          <img
            src={metadata.image}
            alt={metadata.title}
            className="h-16 w-16 rounded-lg object-cover"
          />
        )}
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {metadata.title}
          </p>
          <p className="text-sm text-gray-600">{metadata.description}</p>
        </div>
      </div>
    </a>
  )
}

export default LinkCard
