import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type SortOrder } from '@/shared/types'
import { type ArticleType, type ArticlesSortField } from '@/entities/Article'

import { getArticlesPageInited } from '../../selectors/articlesPageSelector'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../slice/articlesPageSlice'

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('initArticlesPage', async (searchParams, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI

    const inited = getArticlesPageInited(getState())

    if (!inited) {
        const orderFromUrl = searchParams.get('order')
        const sortFromUrl = searchParams.get('sort')
        const searchFromUrl = searchParams.get('search')
        const typeFromUrl = searchParams.get('type')

        if (orderFromUrl) {
            dispatch(articlePageActions.setOrder(orderFromUrl as SortOrder))
        }

        if (sortFromUrl) {
            dispatch(
                articlePageActions.setSort(sortFromUrl as ArticlesSortField)
            )
        }

        if (searchFromUrl) {
            dispatch(articlePageActions.setSearch(searchFromUrl))
        }

        if (typeFromUrl) {
            dispatch(articlePageActions.setType(typeFromUrl as ArticleType))
        }

        dispatch(fetchArticlesList({}))
        dispatch(articlePageActions.initView())
    }
})
