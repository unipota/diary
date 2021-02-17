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
    color: ${(props) => props.theme.textColor.base};

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

export default MarkdownStyler
