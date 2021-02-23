import ContentRender from '@components/contentRender'
import Date from '@components/date'
import { getAllPostIds, getPostData } from '@lib/posts'
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import Head from 'next/head'

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
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <ContentRender content={postData.content}></ContentRender>
      </article>
    </>
  )
}

export default Post
