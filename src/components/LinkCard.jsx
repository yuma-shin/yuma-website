'use client'

import { useEffect, useState } from 'react'

export function LinkCard({ url }) {
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
    <>
      <a
        href={metadata.url}
        className="max-w not-prose mb-2 block rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        target="_blank"
      >
        <div className="flex flex-col-reverse items-stretch md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex flex-1 flex-col justify-between px-4 py-3">
            <div>
              <p className="line-clamp-1 text-lg font-semibold text-gray-900 dark:text-white">
                {metadata.title}
              </p>
              <p className="line-clamp-1 text-sm text-gray-600 dark:text-gray-400">
                {metadata.description}
              </p>
            </div>
            {metadata.icon && metadata.title && metadata.provider ? (
              <div className="mt-2 flex items-center space-x-2">
                <img
                  src={metadata.icon}
                  alt={metadata.title}
                  width={14}
                  height={14}
                />
                <p className="text-sm">{metadata.provider}</p>
              </div>
            ) : null}
          </div>
          {metadata.image && (
            <div className="flex flex-shrink-0 items-stretch overflow-hidden md:w-48">
              <img
                src={metadata.image}
                alt={metadata.title}
                className="h-full w-full rounded-xl object-cover md:rounded-none md:rounded-r-xl"
              />
            </div>
          )}
        </div>
      </a>
    </>
  )
}
