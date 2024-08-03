import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  XIcon,
} from '@/components/SocialIcons'
import { SiQiita } from 'react-icons/si'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata = {
  title: 'About',
  description:
    '私について',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 shadow-md"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            私について
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <div>
              <p>
              高専卒業後、某通信会社で音声系サービスの検証と生成AI活用推進を担当するエンジニアです。
              本務の音声系サービスの検証に加え、WEBアプリの開発や最近ではWindowsアプリの開発をやっています。
              </p>
              <p className='mt-2'>
                右のプロフィール画像は友達に10秒ほどで描いてもらった僕の似顔絵ですw
              </p>
            </div>
            <div>
              <h1 className="text-4xl tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">高専</h1>
              <p className="mt-2">
                高専時代は5年間、宇宙開発研究部に所属し気象観測機器の開発やBalloon Sat・Cube Satの開発をやっていました。
                卒業研究ではバルーンサットの開発とCubeSat教材への改良の検討をやっていました。
              </p>
              <p className="mt-2">
                宇宙開発研究部ではRaspberry PiやArduinoを用いたセンサ機器の開発や、測定した情報を提供するためのWEBサイトの開発を担当していました。
                また、プロダクトマネージメントの経験も積むことができ、社会人となりこれらのスキルが大きく役立っています。
              </p>
            </div>
            <div>
              <h1 className="text-4xl tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">社会人</h1>
              <p className='mt-2'>
                現在は某通信会社にて音声系サービスの検証業務を主に担当しています。統合系サービスのため使われている技術が音声・クラウド・サーバーなど幅広く、多様なスキルが身に付けられ、やりがいを感じています。
                品質を担保する最後の砦として日々取り組んでいます。
              </p>
              <p className='mt-2'>
                最近では生成AIの活用推進も担当しており、主にAzure OpenAIを活用したカイゼン企画、アプリケーションの開発に取り組んでいます。
              </p>
            </div>
            <div>
              <h1 className="text-4xl tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">OFF TIME</h1>
              <p className='mt-2'>
                PC関連のガジェット集め、ゲームをやっています。リモートワークで体を動かす機会が減ったので、毎日ウォーキングとリングフィットをやっています。
              </p>
              <p className='mt-2'>
                ゲームはスプラトゥーン、ゼルダの伝説にハマっています。
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/TSUMTSUM_YUMA" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/yuma.shintani/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/yuma-shin" icon={GitHubIcon} className="mt-4">
              GitHub (Private)
            </SocialLink>
            <SocialLink href="https://github.com/yuma-shintani" icon={GitHubIcon} className="mt-4">
              GitHub (Work)
            </SocialLink>
            <SocialLink href="https://qiita.com/y-shin" icon={SiQiita} className="mt-4">
              Qiita
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
