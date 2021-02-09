import type { FC } from 'react'
import { css } from '@emotion/react'
interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header></header>
      <div>
        <main css={container}>{children}</main>
      </div>
    </div>
  )
}

const container = css`
  margin: 0 auto;
  max-width: 600px;
`

export default Layout
