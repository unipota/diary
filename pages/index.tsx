import AppHead from '@components/appHead'
import PostLink from '@components/postLink'
import RoundedTriangle from '@components/roundedTriangle'
import TitleLogo from '@components/titleLogo'
import { useTheme } from '@emotion/react'
import { getSortedPostsData } from '@lib/posts'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { styled } from 'twin.macro'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  const theme = useTheme()
  return (
    <div>
      <AppHead color={theme.textColor.base} />
      <Head>
        <title>unilog</title>
      </Head>
      <TitleLogo />
      <LogoSeparator>
        <RoundedTriangle />
      </LogoSeparator>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <PostLinkWrapper key={id}>
            <PostLink id={id} date={date} title={title} />
          </PostLinkWrapper>
        ))}
      </ul>
    </div>
  )
}

const LogoSeparator = styled.div`
  padding: 12px 0 32px;
  width: 100%;
  & svg {
    margin: 0 auto;
  }
`

const PostLinkWrapper = styled.li`
  margin: 0 0 24px 0;
`

export default Home
