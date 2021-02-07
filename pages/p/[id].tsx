import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { getAllPostIds, getPostData } from '@lib/posts'
import Head from 'next/head'
import Date from '@components/date'
import Layout from '@components/layout'
import ContentRender from '@components/contentRender'

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
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <ContentRender content={postData.content}></ContentRender>
      </article>
    </Layout>
  )
}

export default Post
