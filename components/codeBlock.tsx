import { useTheme } from '@emotion/react'
import { CodeComponent } from 'react-markdown/src/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// pre > code
const CodeBlock: CodeComponent = ({ inline, className, children }) => {
  const theme = useTheme()
  const cn = className as string
  const match = /language-(\w+)/.exec(cn || '')
  const language = match && match[1]
  return !inline && match ? (
    <SyntaxHighlighter
      language={language ?? ''}
      style={nord}
      customStyle={{
        borderRadius: 12,
        padding: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        backgroundColor: theme.color.placeholder,
      }}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code>{children}</code>
  )
}

export default CodeBlock
