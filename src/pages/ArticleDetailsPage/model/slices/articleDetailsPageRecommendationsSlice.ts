import {
    createEntityAdapter,
    createSlice,
    configureStore,
    type PayloadAction,
} from '@reduxjs/toolkit'

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendation'
import { type ArticleDetailsPageRecommendationsSchema } from '../types/ArticleDetailsPageRecommendationsSchema'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'
import { type Article } from '@/entities/Article'


interface Book {
    bookId: string
    title: string
}

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticleReccomendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState()
    )

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            }
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleRecommendations.pending,
            (state, action) => {
                state.error = undefined
                state.isLoading = true
            }
        )
        builder.addCase(
            fetchArticleRecommendations.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            }
        )
        builder.addCase(
            fetchArticleRecommendations.rejected,
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    },
})

export const {
    reducer: ArticleDetailsPageRecommendationsReducer,
    actions: ArticleDetailsPageRecommendationsActions,
} = articleDetailsPageRecommendationsSlice
