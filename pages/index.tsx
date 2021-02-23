import PostLink from '@components/postLink'
import RoundedTriangle from '@components/roundedTriangle'
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

const TitleLogo = styled.div`
  align-items: center;
  display: flex;
  font-size: 32px;
  font-weight: bold;
  justify-content: center;
  padding: 24px 12px 12px 0;
  width: 100%;

  & > div {
    background-color: ${(props) => props.theme.textColor.base};
    border-radius: 100%;
    height: 20px;
    margin: 6px 12px 0 0;
    width: 20px;
  }
`

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
