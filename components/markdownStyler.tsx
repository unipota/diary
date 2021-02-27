import { FC } from 'react'
import { styled } from 'twin.macro'

interface Props {
  children: React.ReactNode
}

const MarkdownStyler: FC<Props> = ({ children }) => {
  return <Body>{children}</Body>
}

const Body = styled.div`
  padding: 1rem 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
  }
  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.9em;
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
    margin: 1rem 0;
  }
  strong {
    font-weight: 700;
  }
  blockquote {
    margin: 1.5rem 0;
    padding: 0.2rem 1.5rem;
    position: relative;

    &:before {
      background-color: ${(props) => props.theme.color.body};
      border-radius: 100vw;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 6px;
    }

    p {
      margin: 0;
    }
  }
  b,
  strong {
    font-weight: bold;
  }
  dfn {
    font-style: italic;
  }
  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }
  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }
  li p:last-child {
    margin: 0;
  }
  dd {
    margin: 0 0 0 2em;
  }
  li {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    list-style-position: inside;
    padding: 0.2rem 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    margin: 2rem 0;
  }
  td {
    vertical-align: top;
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
    color: ${(props) => props.theme.textColor.base};

    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7rem;
    margin: 2rem 0;
  }
  img {
    border: 0;
    height: auto;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    vertical-align: middle;
  }
  code {
    font-size: 1rem;
  }
`

export default MarkdownStyler
