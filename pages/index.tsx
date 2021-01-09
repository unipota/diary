import Head from 'next/head'
import Link from 'next/link'

import { InferGetStaticPropsType, NextPage } from 'next'
import { getSortedPostsData } from '../lib/posts'

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
        <title>📖</title>
      </Head>
      <p>📖</p>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/p/${id}`} key={id}>
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
