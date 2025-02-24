import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkToc from 'remark-toc'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['img.youtube.com'],
  },
  reactStrictMode: false,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 1, heading: '目次' }]],
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      [rehypeExternalLinks, { target: '_blank' }],
    ],
  },
})

export default withMDX(nextConfig)
