import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { userActions, type User, getUserAuthData } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { getArticleDetailsData } from '@/entities/Article'

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
