import MarkdownStyler from './markdownStyler'
import renderMarkdown from '@lib/markdown'
import type { FC } from 'react'

interface Props {
  content: string
}

const ContentRender: FC<Props> = ({ content }) => {
  const renderedHtml = renderMarkdown(content)
  return (
    <MarkdownStyler>
      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
    </MarkdownStyler>
  )
}

export default ContentRender
