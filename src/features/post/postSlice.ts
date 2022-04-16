import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { sub }                                from 'date-fns'
import { RootState }                          from '../../app/store'
import { IPost }                              from '../../types/IPost'

const initialState: IPost[] = [
  {
    id: '1',
    userId: '',
    title: 'Learn redux toolkit',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean' +
      ' commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: '2',
    userId: '',
    title: 'Learn some else...',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean' +
      ' commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  }
]

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<IPost>){
        state.unshift(action.payload)
      },
      prepare(title, content, userId){
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        }
      }
    },
    reactionAdded(state, action: PayloadAction<{ postId: string, reaction: string }>){
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
  }
})

export const { addPost, reactionAdded } = postSlice.actions

export const selectAllPosts = (state: RootState) => state.posts

export default postSlice.reducer
