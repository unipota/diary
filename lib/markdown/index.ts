import renderer from './renderer'
import marked from 'marked'

marked.setOptions({
  langPrefix: '',
  breaks: true,
  smartLists: true,
})

marked.use({ renderer })

const renderMarkdown = (content: string) => {
  return marked(content)
}

export default renderMarkdown
