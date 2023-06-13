import { type Article } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'

export const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleRecommendationsQuery =
    recommendationsApi.useGetArticleRecommendationsListQuery
