import RoundedTriangle from '@components/roundedTriangle'
import { getSortedPostsData } from '@lib/posts'
import { Smush32 } from '@thi.ng/random'
import { hsla } from 'color2k'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { css, styled } from 'twin.macro'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const genColor = (seed: string): string => {
  const seednum = seed.split('').reduce((acc: number, cur: string): number => {
    return acc + cur.charCodeAt(0)
  }, 0)
  const rnd = new Smush32(seednum)
  return hsla(rnd.minmax(0, 360), 1, 0.75, 1)
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <div>
      <Head>
        <title>unilog</title>
      </Head>
      <TitleLogo>
        <div></div>
        <p>unilog</p>
      </TitleLogo>
      <LogoSeparator>
        <RoundedTriangle></RoundedTriangle>
      </LogoSeparator>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/p/${id}`}>
              <a>
                <div
                  css={css`
                    background-color: ${genColor(id)};
                    border-radius: 100%;
                    height: 20px;
                    width: 20px;
                  `}
                />
                {title}
                <br />
                {date}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TitleLogo = styled.div`
  align-items: center;
  display: flex;
  font-size: 32px;
  font-weight: bold;
  justify-content: center;
  padding: 24px 0 12px;
  width: 100%;
  & > div {
    background-color: ${(props) => props.theme.textColor.base};
    border-radius: 100%;
    height: 0.6em;
    margin: 6px 12px 0;
    width: 0.6em;
  }
`

const LogoSeparator = styled.div`
  padding: 12px 0 64px;
  width: 100%;
  & svg {
    margin: 0 auto;
  }
`

export default Home
