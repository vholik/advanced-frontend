import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ValidateProfileError } from '../../consts/consts'

import { updateProfileData } from './updateProfileData'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const data = {
    username: 'admin',
    age: 17,
    city: 'Wrocław',
    country: Country.Germany,
    currency: Currency.USD,
    first: 'admin 2',
    lastname: 'admin name',
    id: '1',
}

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    // test('error', async () => {
    //     const thunk = new TestAsyncThunk(updateProfileData, {
    //         profile: {
    //             form: { ...data, lastname: '' },
    //         },
    //     })
    //     const result = await thunk.callThunk()

    //     expect(result.meta.requestStatus).toBe('rejected')
    //     expect(result.payload).toEqual([
    //         ValidateProfileError.SERVER_ERROR,
    //         ValidateProfileError.INCORRECT_USER_DATA,
    //     ])
    // })
})
