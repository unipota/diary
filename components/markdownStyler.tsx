import styled from '@emotion/styled'
import { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const MarkdownStyler: FC<Props> = ({ children }) => {
  return <Body>{children}</Body>
}

const Body = styled.div`
  padding: 2rem 0 1rem;

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
    margin: 4em 0;
    padding: 0;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7rem;
    /* margin: 1rem 0; */
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
    margin: 0.4em 0;
    padding: 0 0 0 0.2em;
  }
  li p:last-child {
    margin: 0;
  }
  dd {
    margin: 0 0 0 2em;
  }
  li {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7rem;
    list-style-position: inside;
    padding: 0.2rem 0;
    position: relative;

    &::before {
      background-color: ${(props) => props.theme.textColor.base};
      border-radius: 100%;
      content: '';
      display: inline-block;
      height: 8px;
      left: 0;
      /* margin: 0 0px calc(1rem / 2 - 6px) 0; */
      position: absolute;
      top: 0.8em;
      transform: translateX(-200%);
      width: 8px;
    }
  }
  ul > li {
    margin-left: 1em;
  }
  & > ul > li {
    margin-top: 1em;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1rem;
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
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.7rem;
    padding-bottom: 1.5rem;
  }
  a {
    color: ${(props) => props.theme.textColor.base};

    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7rem;
    margin: 2rem 0;
    text-decoration: underline;
  }
  img {
    border: 0;
    height: auto;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    vertical-align: middle;
  }
  code {
    background: ${(props) => props.theme.color.shade};
    border-radius: 8px;
    font-size: 1rem;
    margin: 0 0.2rem;
    padding: 0.2rem 0.4rem;
  }
`

export default MarkdownStyler
