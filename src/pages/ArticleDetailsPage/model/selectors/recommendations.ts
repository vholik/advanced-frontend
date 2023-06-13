import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleReccomendationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading
export const getArticleRecommendationsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error
