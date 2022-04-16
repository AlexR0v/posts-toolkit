import { FC }             from 'react'
import { useAppSelector } from '../../hooks/store.hooks'
import { selectAllUsers } from '../users/usersSlice'

interface IPostAuthor {
  userId: string
}

const PostAuthor: FC<IPostAuthor> = ({ userId }) => {
  const users = useAppSelector(selectAllUsers)

  const author = users.find(user => user.id === userId)

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor
