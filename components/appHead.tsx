import NextHead from 'next/head'
import type { FC } from 'react'

const AppHead: FC = () => {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="https://img.unipota.me/test" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="ja_JP" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="https://img.unipota.me/test" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </NextHead>
  )
}

export default AppHead
