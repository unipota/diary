import { FC } from 'react'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  )
}

export default Layout
