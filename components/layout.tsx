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
  color: ${(props) => props.theme.textColor.base};
  font-family: 'Quicksand', sans-serif;
  width: 100vw;
`

const Container = styled.main`
  margin: 0 auto;
  max-width: 580px;
  padding: 32px;
`

export default Layout
