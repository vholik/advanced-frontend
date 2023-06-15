import { createAsyncThunk } from '@reduxjs/toolkit'


import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelector'
import { articlePageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('fetchNextArticlesPage', async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1))
        dispatch(fetchArticlesList({}))
    }
})
