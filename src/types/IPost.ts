export interface IPost {
  id: string
  title: string
  content: string
  date: string
  userId: string
  reactions: IReactions
}

interface IReactions {
  thumbsUp: number
  wow: number
  heart: number
  rocket: number
  coffee: number
}
