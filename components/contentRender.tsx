import CodeBlock from './codeBlock'
import ImageBlock from './imageBlock'
import MarkdownStyler from './markdownStyler'
import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface Props {
  content: string
}

const ContentRender: FC<Props> = ({ content }) => {
  return (
    <>
      <MarkdownStyler>
        <ReactMarkdown
          skipHtml={false}
          rehypePlugins={[rehypeRaw]}
          components={{ code: CodeBlock, img: ImageBlock }}
        >
          {content}
        </ReactMarkdown>
      </MarkdownStyler>
    </>
  )
}

export default ContentRender
