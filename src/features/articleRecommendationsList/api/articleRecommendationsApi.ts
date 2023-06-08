import { rtkApi } from 'shared/api/rtkApi'

export const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
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