import Date from '@components/date'
import { genColor } from '@lib/color'
import Link from 'next/link'
import { FC } from 'react'
import { styled } from 'twin.macro'

interface Props {
  id: string
  date: string
  title: string
}

const PostLink: FC<Props> = ({ id, date, title }) => {
  return (
    <Link href={`/p/${id}`}>
      <Container>
        <Dot
          css={{
            backgroundColor: genColor(id, 1, 0.76, 1),
          }}
        />
        <Body>
          <p tw="text-lg font-bold">{title}</p>
          <Date dateString={date} />
        </Body>
      </Container>
    </Link>
  )
}

const Container = styled.a`
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  padding: 12px;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.shade};
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  margin: 0 0 0 12px;
`

const Dot = styled.div`
  border-radius: 100%;
  flex-shrink: 0;
  height: 20px;
  margin: 4px 0 0;
  width: 20px;
`

export default PostLink
