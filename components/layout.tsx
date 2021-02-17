import type { FC } from 'react'
import { styled } from 'twin.macro'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Body>
      <Container>{children}</Container>
    </Body>
  )
}

const Body = styled.div`
  /* color: ${(props) => props.theme.textColor.base}; */
  height: 100vh;
  width: 100vw;
`

const Container = styled.main`
  margin: 0 auto;
  max-width: 600px;
  padding: 32px;
`

export default Layout
