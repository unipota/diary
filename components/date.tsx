import { parseISO, format } from 'date-fns'
import type { FC } from 'react'

interface Props {
  dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'L/d, yyyy')}</time>
}

export default Date
