import CodeBlock from '@components/codeBlock'
import ImageBlock from '@components/imageBlock'
import { renderToString } from 'react-dom/server'

const renderer: marked.RendererObject = {
  image: (href, title, text) => {
    const src = href ?? ''
    const alt = title ?? ''
    return renderToString(<ImageBlock src={src} alt={alt} />)
  },
  code: (code, language, isEscaped) => {
    return renderToString(<CodeBlock code={code} language={language ?? ''} />)
  },
}

export default renderer
