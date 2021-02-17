import AppHead from '@components/appHead'
import Layout from '@components/layout'
import { ThemeProvider, Global, css } from '@emotion/react'
import useThemePref from '@lib/useTheme'
import { LightTheme, DarkTheme } from '@styles/theme'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }: AppProps) => {
  const isDark = useThemePref()
  const currentTheme = isDark ? DarkTheme : LightTheme

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Global
          styles={css`
            html {
              background-color: ${currentTheme.color.background};
              color: ${currentTheme.textColor.base};
            }
          `}
        />
        <AppHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
