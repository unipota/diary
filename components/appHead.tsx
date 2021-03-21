import { nord } from '@styles/theme'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import type { FC } from 'react'

interface Props {
  color: string
  title?: string
}

const AppHead: FC<Props> = ({ color, title = 'unilog' }) => {
  const router = useRouter()
  const imgQuery = `${encodeURIComponent(title)}?color=${encodeURIComponent(
    color
  )}`
  const imgPath = `https://img.unipota.me/${imgQuery}`
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
      <meta name="theme-color" content={nord.nord3} />
      <link rel="mask-icon" href="/favicon.svg" color={nord.nord3} />
      {/* <link
        rel="alternate"
        type="application/rss+xml"
        href="/feed"
        title="RSS2.0"
      /> */}
      <meta name="theme-color" content={color} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta name="description" content="うにぽたのろぐ" /> */}
      {/* OGP */}
      <meta property="og:title" content={`● ${title}`} />
      {/* <meta property="og:description" content="うにぽたのろぐ" /> */}
      <meta property="og:image" content={imgPath} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="ja_JP" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@unipota" />
      <meta name="twitter:creator" content="@unipota" />
      <meta
        name="twitter:url"
        content={`https://log.unipota.me${router.asPath}`}
      />
      <meta name="twitter:title" content={`● ${title}`} />
      {/* <meta name="twitter:description" content="うにぽたのろぐ" /> */}
      <meta name="twitter:image" content={imgPath} />
      {/* font */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default AppHead
