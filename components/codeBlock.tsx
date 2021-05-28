import { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface Props {
  code: string
  language: string
}

// pre > code
const CodeBlock: FC<Props> = ({ code, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={nord}
      customStyle={{
        borderRadius: 12,
        padding: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        backgroundColor: 'var(--theme-color-placeholder)',
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
