import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { ValidateProfileError } from '../../types/profile'

import { getProfileValidateErrors } from './getProfileValidateErrors'

const data = {
    username: 'admin',
    age: 17,
    city: 'Wrocław',
    country: Country.Germany,
    currency: Currency.USD,
    first: 'admin 2',
    lastname: 'admin name',
}

describe('getProfileForm test', () => {
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.INCORRECT_AGE],
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ])
    })
    test('test empty selector', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined)
    })
})
