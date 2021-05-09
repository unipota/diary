import renderer from './renderer'
import marked from 'marked'

marked.use({ renderer })

const renderMarkdown = (content: string) => {
  return marked(content)
}

export default renderMarkdown
