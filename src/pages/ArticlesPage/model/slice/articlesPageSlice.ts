import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { type ArticlesPagesSchema } from '../types/articlesPageSchema'

import { type StateSchema } from '@/app/providers/StoreProvider'
import {
    ArticleView,
    type Article,
    ArticlesSortField,
    ArticleType,
} from '@/entities/Article'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { type SortOrder } from '@/shared/types/sort'

interface Book {
    bookId: string
    title: string
}

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
)

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPagesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.LIST,
        page: 1,
        hasMore: true,
        _inited: false,
        sort: ArticlesSortField.CREATED,
        search: '',
        order: 'asc',
        limit: 4,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initView: (state) => {
            state.view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView

            state.limit = state.view === ArticleView.LIST ? 4 : 9
            state._inited = true
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setSort: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true

            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state)
            }
        })
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false
            articlesAdapter.addMany(state, action.payload)
            state.hasMore = action.payload.length >= state.limit

            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload)
            } else {
                articlesAdapter.addMany(state, action.payload)
            }
        })
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { reducer: articlesPageReducer, actions: articlePageActions } =
    articlePageSlice
