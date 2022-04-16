import { configureStore } from '@reduxjs/toolkit'
import postReducer        from '../features/post/postSlice'
import usersSlice         from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
