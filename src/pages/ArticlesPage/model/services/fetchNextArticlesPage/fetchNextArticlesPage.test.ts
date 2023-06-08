import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { fetchNextArticlesPage } from './fetchNextArticlesPage'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('fetchNextArticlesPage.test', () => {
    test('fetch next articles', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        // expect(fetchArticlesList).toHaveBeenCalled()
    })

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        // expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})
