import type { AppProps } from 'next/app'

import { GlobalStyles } from 'twin.macro'
import AppHead from '@components/appHead'
import Layout from '@components/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <AppHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
