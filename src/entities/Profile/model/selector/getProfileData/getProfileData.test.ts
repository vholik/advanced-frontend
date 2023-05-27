import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { getProfileData } from './getProfileData'

const data = {
    username: 'admin',
    age: 17,
    city: 'Wrocław',
    country: Country.Germany,
    currency: Currency.USD,
    first: 'admin 2',
    lastname: 'admin name',
}

describe('getProfile test', () => {
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toBe(undefined)
    })
})
