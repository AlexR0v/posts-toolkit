import React, { useState } from 'react'
import { useAppSelector }  from '../../hooks/store.hooks'
import { useActions }      from '../../hooks/useActions'
import { selectAllUsers }  from '../users/usersSlice'

const AddPostForm = () => {

  const { addPost } = useActions()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useAppSelector(selectAllUsers)

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
  const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content && userId) {
      addPost(title, content, userId)
      setTitle('')
      setContent('')
      setUserId('')
    }
  }

  const usersOptions = users.map(user => (
    <option
      key={user.id}
      value={user.id}
    >
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <button
          type='button'
          onClick={onSavePostClicked}
          disabled={!canSave}
        >Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm

