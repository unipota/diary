import { ThemeContext } from '@components/appContext'
import AppHead from '@components/appHead'
import Layout from '@components/layout'
import { Global, css, ThemeProvider } from '@emotion/react'
import { LightTheme, DarkTheme } from '@styles/theme'
import { FC, useContext } from 'react'
import { GlobalStyles } from 'twin.macro'

interface Props {
  children: React.ReactNode
}

const AppGlobal: FC<Props> = ({ children }) => {
  const { state } = useContext(ThemeContext)
  const currentTheme = state.themePref === 'Dark' ? DarkTheme : LightTheme

  return (
    <>
      <GlobalStyles />
      <Global
        styles={css`
          html {
            background-color: ${currentTheme.color.background};
            color: ${currentTheme.textColor.base};
            transition: all 0.4s;
          }
        `}
      />
      <ThemeProvider theme={currentTheme}>
        <AppHead />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </>
  )
}

export default AppGlobal
