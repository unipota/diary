import { css } from '@emotion/react'
import { MainTheme } from './theme'

const markdownStyle = css`
  padding: 1rem 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${MainTheme.colors.tint};
    font-weight: 800;
  }
  hr {
    border: 0;
    border-top: 2px solid ${MainTheme.colors.shade};
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
    border-left: 10px solid ${MainTheme.colors.shade};
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
    color: ${MainTheme.colors.tint};

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

export default markdownStyle
