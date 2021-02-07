import type { FC } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  content: string
}

// pre > code
const CodeBlock = ({
  language,
  value,
}: {
  language: string
  value: string
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={nord}
      customStyle={{
        fontSize: '1rem',
        borderRadius: 5,
        padding: '1rem',
        marginBottom: '2rem',
      }}
    >
      {value}
    </SyntaxHighlighter>
  )
}

const ContentRender: FC<Props> = ({ content }) => {
  return (
    <>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
    </>
  )
}

export default ContentRender
