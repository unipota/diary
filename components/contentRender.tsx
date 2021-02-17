import CodeBlock from './codeBlock'
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
          renderers={{ code: CodeBlock }}
        />
      </MarkdownStyler>
    </>
  )
}

export default ContentRender
