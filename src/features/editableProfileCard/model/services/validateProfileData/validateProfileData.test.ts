import axios from 'axios'

import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../consts/consts'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

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
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without firstname and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    })
})
