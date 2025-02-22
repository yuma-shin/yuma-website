import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkCard } from '@/components/LinkCard'
import { Qiita } from '@/components/Qiita'

import WebPexer from './img/webpexer.png'
import Llamind from './img/llamind.png'
import ChunkSize from './img/chunk.png'
import Ollama from './img/ollama.png'

const projects = [
  {
    name: 'WebPexer',
    description:
      '画像ファイルのwebpとpngの相互変換をするデスクトップアプリケーションです。',
    link: {
      href: 'https://github.com/yuma-shin/webpexer',
      label: 'github.com',
    },
    logo: WebPexer,
  },
  {
    name: 'Llamind',
    description:
      'Chat GPTライクに使えるOllama向けのデスクトップアプリケーションです。Ollamateをフォークし、モデルのインストール・アンインストールができる機能を追加しました。',
    link: {
      href: 'https://github.com/yuma-shintani/llamind',
      label: 'github.com',
    },
    logo: Llamind,
  },
  {
    name: 'Chunk Size Checker',
    description:
      'RAGで使用するドキュメントから総トークン数と目安となるChunk Size、Chunk Overlapを算出するデスクトップアプリケーションです。',
    link: {
      href: 'https://github.com/yuma-shintani/chunksize-checker',
      label: 'github.com',
    },
    logo: ChunkSize,
  },
  {
    name: 'Ollama Model Library',
    description:
      'Ollama Modelsで利用可能なモデルの最新データセットをJSONフォーマットで提供します。毎日0時(UTC)にモデルリストがアップデートされます。',
    link: {
      href: 'https://yuma-shintani.github.io/ollama-model-library',
      label: 'github.com',
    },
    logo: Ollama,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'My Work',
  description:
    '個人的に取り組んできた記事の執筆、開発したアプリケーション・ツールを紹介します。',
}

export default function Work() {
  return (
    <>
      <SimpleLayout
        title="My Product"
        intro="個人的に開発したアプリケーション・ツールを紹介します。"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-32 w-32"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <SimpleLayout title="My Qiita" intro="Qiitaに執筆した記事を紹介します。">
        <h2 className="mb-4 text-2xl">ピックアップ記事</h2>
        <div class="grid grid-cols-2 gap-4">
          <LinkCard url="https://qiita.com/y-shin/items/7f0922cb00c6e14280b9" />
          <LinkCard url="https://qiita.com/y-shin/items/de7678d7f118793ea3e0" />
        </div>
        <h2 className="my-4 text-2xl">最新記事</h2>
        <div class="grid grid-cols-2 gap-4">
          <Qiita />
        </div>
      </SimpleLayout>
    </>
  )
}
