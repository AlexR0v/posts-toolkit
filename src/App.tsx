import React       from 'react'
import AddPostForm from './features/post/AddPostForm'
import PostsList   from './features/post/PostsList'

const App = () => {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
