import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import axios from 'axios'
import { userActions, type User, getUserAuthData } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails'

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

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

        return response.data
    } catch (error) {
        return rejectWithValue('Error')
    }
})
