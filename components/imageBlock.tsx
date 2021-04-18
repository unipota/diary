import styled from '@emotion/styled'
import { FC } from 'react'

interface Props {
  src: string
  alt: string
}

const ImageBlock: FC<Props> = ({ src, alt }) => {
  return (
    <Figure>
      {/* <a href={`${src}.jpg`} target="_blank" rel="noopener noreferrer"> */}
      <picture>
        <source
          type="image/webp"
          sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 640px"
          srcSet={`
          ${src}h.webp 1024w,
          ${src}l.webp  640w,
          ${src}m.webp  320w
        `}
        />
        <Image src={`${src}l.jpg`} alt={alt} title={alt} loading="lazy" />
      </picture>
      {/* </a> */}
      {/* <figcaption>{alt}</figcaption> */}
    </Figure>
  )
}

const Figure = styled.figure`
  margin: 24px auto;
  max-width: 100%;
`

const Image = styled.img`
  border-radius: 12px;
  min-height: 120px;
`

export default ImageBlock
