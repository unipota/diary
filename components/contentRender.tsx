import CodeBlock from './codeBlock'
import styled from '@emotion/styled'
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

const MarkdownStyler = styled.div`
  padding: 1rem 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.color.tint};
    font-weight: 800;
  }
  hr {
    border: 0;
    border-top: 2px solid ${(props) => props.theme.color.shade};
    display: block;
    height: 1px;
    margin: 1em 0;
    padding: 0;
  }
  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    margin: 1.5rem 0;
  }
  strong {
    font-weight: 700;
  }
  blockquote {
    border-left: 10px solid ${(props) => props.theme.color.shade};
    margin: 1.5rem 0;
    padding: 0.2rem 1.5rem;
  }
  li {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    list-style-position: inside;
    padding: 0.5rem 0;
  }
  table {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    margin: 2rem 0;
  }
  th,
  td {
    padding: 0.5rem 0;
    padding-right: 5rem;
  }
  th {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.7rem;
    padding-bottom: 1.5rem;
  }
  a {
    color: ${(props) => props.theme.color.tint};

    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    margin: 2rem 0;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  code {
    font-size: 1rem;
  }
`

export default ContentRender
