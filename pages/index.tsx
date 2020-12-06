import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import styles from '../styles/Home.module.scss'

import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'

const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>diary</title>
      </Head>
      <Layout home>home</Layout>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`p/${id}`} key={id}>
              <a>
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

export default Home
export { getStaticProps }
