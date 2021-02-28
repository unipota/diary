import AppContext from '@components/appContext'
import AppGlobal from '@components/appGlobal'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContext>
      <AppGlobal>
        <Component {...pageProps} />
      </AppGlobal>
    </AppContext>
  )
}

export default App
