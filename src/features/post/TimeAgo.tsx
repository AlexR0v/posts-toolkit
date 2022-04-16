import { formatDistanceToNow, parseISO } from 'date-fns'
import { FC }                            from 'react'

interface ITimeAgo {
  timestamp: string
}

const TimeAgo: FC<ITimeAgo> = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
  )
}
export default TimeAgo
