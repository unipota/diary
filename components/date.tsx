import styled from '@emotion/styled'
import { parseISO, format } from 'date-fns'
import type { FC } from 'react'

interface Props {
  dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <Body dateTime={dateString}>{format(date, 'L/d, yyyy')}</Body>
}

const Body = styled.time`
  opacity: 0.6;
`

export default Date
