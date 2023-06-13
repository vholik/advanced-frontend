import {
    createEntityAdapter,
    createSlice,
    configureStore,
    type PayloadAction,
} from '@reduxjs/toolkit'

import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'


interface Book {
    bookId: string
    title: string
}

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(
            fetchCommentsByArticleId.fulfilled,
            (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            }
        )
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const {
    reducer: ArticleDetailsCommentsReducer,
    actions: ArticleDetailsCommentsActions,
} = articleDetailsCommentsSlice
