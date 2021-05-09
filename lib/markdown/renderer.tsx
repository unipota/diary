import ImageBlock from '@components/imageBlock'
import { renderToString } from 'react-dom/server'

const renderer: marked.RendererObject = {
  image: (href, title, text) => {
    const src = href ?? ''
    const alt = title ?? ''
    return renderToString(<ImageBlock src={src} alt={alt} />)
  },
}

export default renderer
