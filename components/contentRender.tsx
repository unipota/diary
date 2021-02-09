import type { FC } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import markdownStyle from '@styles/markdown'
import CodeBlock from './codeBlock'

interface Props {
  content: string
}

const ContentRender: FC<Props> = ({ content }) => {
  return (
    <>
      <div css={markdownStyle}>
        <ReactMarkdown
          source={content}
          escapeHtml={false}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </>
  )
}

export default ContentRender
