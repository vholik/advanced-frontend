import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'
import { addCommentFormActions } from '@/features/AddCommentForm'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    INCORRECT_DATA = '',
}

export const addCommmentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/sendComent', async (text, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI

    try {
        const userData = getUserAuthData(getState())
        const articleId = getArticleDetailsData(getState())?.id

        if (!userData || !text || !articleId) {
            rejectWithValue('no data')
        }

        const response = await extra.api.post<Comment>('/comments', {
            articleId,
            userId: userData?.id,
            text,
        })

        if (!response.data) {
            throw new Error()
        }

        dispatch(fetchCommentsByArticleId(articleId))

        dispatch(addCommentFormActions.setText(''))

        return response.data
    } catch (error) {
        return rejectWithValue('Error')
    }
})
