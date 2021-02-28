import Image from 'next/image'
import type { FC } from 'react'
import { styled } from 'twin.macro'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Body>
      <Container>{children}</Container>
      <Icon href="https://twitter.com/unipota" target="_blank">
        <Image src="/icon.svg" alt="unipota's icon" width={58} height={58} />
      </Icon>
    </Body>
  )
}

const Body = styled.div`
  color: ${(props) => props.theme.textColor.base};
  font-family: 'Quicksand', 'M PLUS Rounded 1c', 'ヒラギノ丸ゴ Pro W4',
    'ヒラギノ丸ゴ Pro', 'Hiragino Maru Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro', 'HG丸ｺﾞｼｯｸM-PRO', 'HGMaruGothicMPRO', sans-serif;
  width: 100vw;
`

const Container = styled.div`
  margin: 0 auto 32px;
  max-width: 540px;
  padding: 32px;
`

const Icon = styled.a`
  --size: 58px;
  background-color: ${(props) => props.theme.color.shade};
  border-radius: 100%;
  display: flex;
  height: var(--size);
  margin: 0 auto 78px;
  padding: 8px;
  width: var(--size);

  & img {
    height: 100%;
    width: 100%;
  }
`

export default Layout
