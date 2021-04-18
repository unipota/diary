import CodeBlock from './codeBlock'
import ImageBlock from './imageBlock'
import MarkdownStyler from './markdownStyler'
import type { FC } from 'react'
import ReactMarkdown from 'react-markdown/with-html'

interface Props {
  content: string
}

const ContentRender: FC<Props> = ({ content }) => {
  return (
    <>
      <MarkdownStyler>
        <ReactMarkdown
          source={content}
          escapeHtml={false}
          renderers={{ code: CodeBlock, image: ImageBlock }}
        />
      </MarkdownStyler>
    </>
  )
}

export default ContentRender
