import { FC }         from 'react'
import { useActions } from '../../hooks/useActions'
import { IPost }      from '../../types/IPost'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

interface IReactionButtons {
  post: IPost
}

const ReactionButtons: FC<IReactionButtons> = ({ post }) => {
  const { reactionAdded } = useActions()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={() => reactionAdded({ postId: post.id, reaction: name })}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}
export default ReactionButtons
