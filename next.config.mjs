import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rlc from 'remark-link-card'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['img.youtube.com'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism, [rehypeExternalLinks, { target: '_blank' }]],
  },
})

export default withMDX(nextConfig)
