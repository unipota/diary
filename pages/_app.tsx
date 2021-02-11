import AppHead from '@components/appHead'
import Layout from '@components/layout'
import { ThemeProvider } from '@emotion/react'
import useTheme from '@lib/useTheme'
import { LightTheme, DarkTheme } from '@styles/theme'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }: AppProps) => {
  const isDark = useTheme()
  const currentTheme = isDark ? DarkTheme : LightTheme

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <AppHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
