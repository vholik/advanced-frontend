import { type URLSearchParams } from 'url'

import axios from 'axios'
import { userActions } from '@/entities/User'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { getQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { initArticlesPage } from './initArticlesPage'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        })

        const params = ''
        await thunk.callThunk(params as any)

        expect(thunk.dispatch).toBeCalledTimes(2)
        // expect(fetchArticlesList).toHaveBeenCalledWith({})
    })
})
