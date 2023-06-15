
import axios from 'axios'


import { initArticlesPage } from './initArticlesPage'

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'



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
