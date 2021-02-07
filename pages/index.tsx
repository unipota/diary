import type { InferGetStaticPropsType, NextPage } from 'next'
import { getSortedPostsData } from '@lib/posts'
import Head from 'next/head'
import Link from 'next/link'

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
    <div className="flex">
      <Head>
        <title>unilog</title>
      </Head>
      <p>unilog</p>
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
