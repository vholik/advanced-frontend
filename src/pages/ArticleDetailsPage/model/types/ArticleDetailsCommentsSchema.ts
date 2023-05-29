import { type Comment } from 'entities/Comment'

export interface ArticleDetailsCommentsSchema {
    isLoading?: boolean
    error?: string
    data?: Comment[]
}
