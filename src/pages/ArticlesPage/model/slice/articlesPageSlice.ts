import {
    createEntityAdapter,
    createSlice,
    configureStore,
    type PayloadAction,
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'
import { ArticleView, type Article } from 'entities/Article'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

import { type ArticlesPagesSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'

interface Book {
    bookId: string
    title: string
}

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPagesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.LIST,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initView: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(
            fetchArticlesList.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.setAll(state, action.payload)
            }
        )
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { reducer: articlesPageReducer, actions: articlePageActions } =
    articlePageSlice
