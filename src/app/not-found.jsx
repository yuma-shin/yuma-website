import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import NotFoundImage from '@/images/notfound.webp'
import Image from 'next/image'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for was not found.
        </p>
        <Image
          src={NotFoundImage}
          width={300}
          style={{ borderRadius: '40% 60% 40% 50% / 60% 60% 50% 60%' }}
          className="mt-4"
        />
        <Button href="/" variant="secondary" className="mt-4">
          Return to home
        </Button>
      </div>
    </Container>
  )
}
