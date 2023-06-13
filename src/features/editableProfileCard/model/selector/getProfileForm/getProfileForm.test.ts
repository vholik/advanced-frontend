import { getProfileForm } from './getProfileForm'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'


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
                form: data,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('test empty selector', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toBe(undefined)
    })
})
