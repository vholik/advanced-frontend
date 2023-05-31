import {
    createEntityAdapter,
    createSlice,
    configureStore,
    type PayloadAction,
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'

import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface Book {
    bookId: string
    title: string
}

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: ['1'],
            entities: {
                '1': {
                    id: '1',
                    text: 'comment',
                    user: { id: '1', username: 'user' },
                },
            },
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

// type RootState = ReturnType<typeof store.getState>

// console.log(store.getState().books)
// // { ids: [], entities: {} }

// // Can create a set of memoized selectors based on the location of this entity state
// const booksSelectors = booksAdapter.getSelectors<RootState>(
//   (state) => state.books
// )

// // And then use the selectors to retrieve values
// const allBooks = booksSelectors.selectAll(store.getState())
