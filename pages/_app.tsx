import type { AppProps } from 'next/app'
import AppHead from '@components/appHead'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  )
}

export default App
