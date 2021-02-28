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
          body {
            background-color: ${currentTheme.color.background};
            color: ${currentTheme.textColor.base};
            transition: background-color 1.2s ease-in;

            & * {
              transition: all 0.2s ease-in;
            }
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
