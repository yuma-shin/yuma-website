import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'
import { SiQiita } from 'react-icons/si'
import { IoIosMusicalNotes } from 'react-icons/io'
import { PiCertificateLight } from 'react-icons/pi'
import logoCloudEssentials from '@/images/logos/cloud-essentials.webp'
import logoGeneral from '@/images/logos/general2024.webp'
import image1 from '@/images/photos/image-1.webp'
import image2 from '@/images/photos/image-2.webp'
import image3 from '@/images/photos/image-3.webp'
import image4 from '@/images/photos/image-4.webp'
import image5 from '@/images/photos/image-5.webp'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>記事を読む</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-14 w-14 rounded-full"
          unoptimized
        />
      </div>
      <dl className="mt-3 flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Certificate</dt>
        <dd className="text-md w-full flex-none font-medium text-zinc-900 dark:text-zinc-100">
          {role.cert}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mb-5 text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={role.year}>{role.year}</time>{' '}
        </dd>
      </dl>
    </li>
  )
}

function Certification() {
  let certs = [
    {
      cert: 'GENERAL 2024#2',
      title: 'JDLA Deep Learning',
      logo: logoGeneral,
      year: '2024',
    },
    {
      cert: 'Cloud Essentials',
      title: 'CompTIA',
      logo: logoCloudEssentials,
      year: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <PiCertificateLight size={25} />
        <span className="ml-3">Certification</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {certs.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Music() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <IoIosMusicalNotes size={25} />
        <span className="ml-3">Favorite Music</span>
      </h2>
      <div className="mt-6 flex items-center">
        <Link
          href="https://youtu.be/8tQiWHXSGN0?si=MEZ3tlWbJ3aKbklZ"
          target="_blank"
        >
          <Image
            src="https://img.youtube.com/vi/8tQiWHXSGN0/mqdefault.jpg"
            alt="ファタール / GEMN - Fatal / GEMN"
            width={200}
            height={600}
            className="rounded-lg"
          />
        </Link>
        <div className="ml-5">
          <p className="text-2xl">ファタール</p>
          <p className="text-xs">
            GEMN
            <br />
            中島健人・キタニタツヤ
          </p>
        </div>
      </div>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Yuma Shintani - Engineer of Voice Communication, Network, Cloud and
            Generative AI
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            社会人6年目のエンジニアです。某通信会社にて音声系サービスの検証業務と生成AI活用推進およびアプリケーション開発を担当しています。
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/yuma-shin"
              aria-label="Github (Private)"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://github.com/yuma-shintani"
              aria-label="Github (Work)"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://qiita.com/y-shin"
              aria-label="Qiita"
              icon={SiQiita}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles
              .filter((article) => !article.draft) // draft が true のものを除外
              .map((article) => (
                <Article key={article.slug} article={article} />
              ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Music />
            <Certification />
          </div>
        </div>
      </Container>
    </>
  )
}
