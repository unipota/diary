import ContentRender from '@components/contentRender'
import Date from '@components/date'
import styled from '@emotion/styled'
import { genColor } from '@lib/color'
import { getAllPostIds, getPostData } from '@lib/posts'
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import tw from 'twin.macro'

type PostSlug = {
  id: string
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<PostSlug>) => {
  const postData = await getPostData(params!.id)
  return {
    props: {
      postData,
    },
  }
}

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title} : unilog</title>
      </Head>
      <article>
        <TitleHeader>
          <Link href="/">
            <ReturnToTitle></ReturnToTitle>
          </Link>
          <TitleDetail>
            <TitleWrapper>
              <Dot
                css={{
                  backgroundColor: genColor(postData.id, 1, 0.76, 1),
                }}
              />
              <Title>{postData.title}</Title>
            </TitleWrapper>
            <DateWrapper>
              <Date dateString={postData.date} />
            </DateWrapper>
          </TitleDetail>
        </TitleHeader>
        <ContentRender content={postData.content}></ContentRender>
      </article>
    </>
  )
}

const Title = styled.h1`
  ${tw`text-lg font-bold`}
`

const TitleHeader = styled.div`
  display: inline-grid;
  grid-template-columns: 60px 1fr 60px;
  margin-bottom: 24px;
  margin-top: 12px;
  width: 100%;
`

const ReturnToTitle = styled.div`
  background-color: ${(props) => props.theme.textColor.base};
  border-radius: 100%;
  cursor: pointer;
  height: 20px;
  justify-self: start;
  margin: 4px 0 4px 2px;
  width: 20px;
`

const TitleDetail = styled.div`
  justify-self: center;
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`

const TitleWrapper = styled.div`
  align-items: center;
  display: inline-flex;
`

const Dot = styled.div`
  border-radius: 100%;
  height: 20px;
  margin: 0 12px 0 0;
  width: 20px;
`

export default Post
