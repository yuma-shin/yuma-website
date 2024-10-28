import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { M_PLUS_Rounded_1c } from "next/font/google"

import '@/styles/tailwind.css'

const mplusrounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata = {
  title: {
    template: '%s - Yuma Shintani',
    default:
      'Yuma Shintani',
  },
  description:
    '社会人6年目のエンジニアです。某通信会社にて音声系サービスの検証業務と生成AI活用推進を担当しています。',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="ja" className="h-full antialiased" suppressHydrationWarning>
        <SpeedInsights/>
        <body className={`flex h-full bg-zinc-50 dark:bg-black ${mplusrounded1c.className}`}>
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
