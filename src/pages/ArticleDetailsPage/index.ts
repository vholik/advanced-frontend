import { ArticleDetailsPageAsync } from './ui/ArticleDetailsPage/ArticleDetailsPage.async'

export { ArticleDetailsPageAsync as ArticleDetailsPage }

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
export type { ArticleDetailsPageRecommendationsSchema } from './model/types/ArticleDetailsPageRecommendationsSchema'
export type { ArticleDetailsPageSchema } from './model/types'
export { articleDetailsPageReducer } from './model/slices/index'
