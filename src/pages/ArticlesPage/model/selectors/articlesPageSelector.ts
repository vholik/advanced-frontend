import { type StateSchema } from '@/app/providers/StoreProvider'
import { ArticleType, ArticleView, ArticlesSortField } from '@/entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading

export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.LIST

export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore

export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 4

export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page || 1

export const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order || 'asc'
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort || ArticlesSortField.CREATED
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? ''
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL
