import { ArticlesPageAsync } from './ui/ArticlesPage/ArticlesPage.async'

export { ArticlesPageAsync as ArticlesPage }
export type { ArticlesPagesSchema } from './model/types/articlesPageSchema'
export { getArticlesPageSearch } from './model/selectors/articlesPageSelector'
export { fetchArticlesList } from './model/services/fetchArticlesList/fetchArticlesList'
export { articlePageActions } from './model/slice/articlesPageSlice'
