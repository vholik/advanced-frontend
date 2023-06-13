import { getProfileIsLoading } from './getProfileIsLoading'

import { type StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'


describe('getProfileIsLoading test', () => {
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        }
        expect(getProfileIsLoading(state as StateSchema)).toBe(true)
    })
    test('test empty selector', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined)
    })
})
