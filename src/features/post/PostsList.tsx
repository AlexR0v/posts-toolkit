import { useAppSelector } from '../../hooks/store.hooks'
import { IPost }          from '../../types/IPost'
import PostAuthor         from './PostAuthor'
import { selectAllPosts } from './postSlice'
import ReactionButtons    from './ReactionsButton'
import TimeAgo            from './TimeAgo'

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)

  const renderPosts = posts.map((post: IPost) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <p>{post.content.substring(0, 100)}...</p>
      <ReactionButtons post={post} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  )
}

export default PostsList

