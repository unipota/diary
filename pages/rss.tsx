import renderMarkdown from '@lib/markdown'
import { getPostData, getSortedPostsData } from '@lib/posts'
import { escape } from 'html-escaper'
import { GetServerSidePropsContext } from 'next'
import RSS from 'rss'

async function generateFeedXml() {
  const feed = new RSS({
    title: 'unilog',
    description: 'うにぽたのログ',
    site_url: 'https://log.unipota.me',
    feed_url: 'https://log.unipota.me/feed',
    language: 'ja',
  })

  const posts = getSortedPostsData()
  const items = posts.map((post) => {
    const { content } = getPostData(post.id)
    const html = renderMarkdown(content)

    return {
      title: post.title,
      description: escape(html),
      date: new Date(post.date),
      url: `https://log.unipota.me/p/${post.id}`,
    }
  })

  items.forEach((item) => {
    feed.item(item)
  })

  return feed.xml()
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateFeedXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=0, stale-while-revalidate') // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml')
  res.write(xml)
  res.end()

  return {
    props: {},
  }
}

const Page = () => null
export default Page
