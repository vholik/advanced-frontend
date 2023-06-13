import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!articleId) {
        return rejectWithValue('no article id provided')
    }

    try {
        const response = await extra.api.get<Comment[]>(`/comments`, {
            params: {
                articleId,
                _expand: 'user',
            },
        })

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue('Error')
    }
})
