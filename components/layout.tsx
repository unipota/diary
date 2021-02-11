import styled from '@emotion/styled'
import type { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Body>
      <header></header>
      <Container>{children}</Container>
    </Body>
  )
}

const Body = styled.div`
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.textColor.base};
  height: 100vh;
  width: 100vw;
`

const Container = styled.main`
  margin: 0 auto;
  max-width: 600px;
  padding: 24px 0;
`

export default Layout
