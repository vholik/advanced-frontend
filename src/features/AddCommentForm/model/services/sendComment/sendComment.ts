import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors'
import { addCommentFormActions } from '../../slice/addCommentFormSlice'

import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'

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
