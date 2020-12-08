import fs from 'fs'
import path from 'path'
import matter from 'front-matter'

const postsDirectory = path.join(process.cwd(), '_posts')

function getTypedMatterResult(fileContents: string) {
  const matterResult = matter(fileContents)
  const attributes = matterResult.attributes as {
    title: string
    date: string
  }

  return {
    content: matterResult.body,
    ...attributes,
  }
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // parse the post metadata section
    const matterResult = getTypedMatterResult(fileContents)

    return {
      id,
      title: matterResult.title,
      date: matterResult.date,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = getTypedMatterResult(fileContents)

  // Combine the data with the id and contentHtml
  return {
    id,
    ...matterResult,
  }
}
