import NextHead from 'next/head'
import type { FC } from 'react'

const AppHead: FC = () => {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="test" />
      {/* OGP */}
      <meta property="og:title" content="test" />
      <meta property="og:description" content="test" />
      <meta property="og:image" content="https://img.unipota.me/test" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="ja_JP" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@unipota" />
      <meta name="twitter:creator" content="@unipota" />
      <meta name="twitter:url" content="https://log.unipota.me" />
      <meta name="twitter:title" content="test2" />
      <meta name="twitter:description" content="test" />
      <meta name="twitter:image" content="https://img.unipota.me/test" />
    </NextHead>
  )
}

export default AppHead
