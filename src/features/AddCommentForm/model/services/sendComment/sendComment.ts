import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userActions, type User, getUserAuthData } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'

import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors'
import { addCommentFormActions } from '../../slice/addCommentFormSlice'

interface LoginByUsernameProps {
    username: string
    password: string
}

export enum LoginErrors {
    INCORRECT_DATA = '',
}

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComent',
    async (_, thunkAPI) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkAPI

        try {
            const userData = getUserAuthData(getState())
            const text = getAddCommentFormText(getState())
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

            dispatch(addCommentFormActions.setText(''))

            return response.data
        } catch (error) {
            return rejectWithValue('Error')
        }
    }
)
