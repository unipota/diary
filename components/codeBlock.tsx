import type { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  language: string
  value: string
}

// pre > code
const CodeBlock: FC<Props> = ({
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
        borderRadius: 12,
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
