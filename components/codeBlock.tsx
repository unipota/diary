import { useTheme } from '@emotion/react'
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
  const theme = useTheme()
  return (
    <SyntaxHighlighter
      language={language}
      style={nord}
      customStyle={{
        borderRadius: 12,
        padding: '1rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        backgroundColor: theme.color.placeholder,
      }}
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
