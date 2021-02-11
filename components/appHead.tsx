import NextHead from 'next/head'
import type { FC } from 'react'

const AppHead: FC = () => {
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="" />
      <meta name="og:title" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  )
}

export default AppHead
