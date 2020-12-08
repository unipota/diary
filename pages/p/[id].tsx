import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'

import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import ReactMarkdown from 'react-markdown/with-html'

import utilStyles from '../../styles/utils.module.scss'

function Post({
  postData,
}: {
  postData: {
    title: string
    date: string
    content: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown source={postData.content} escapeHtml={false} />
      </article>
    </Layout>
  )
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

export default Post
export { getStaticPaths, getStaticProps }
