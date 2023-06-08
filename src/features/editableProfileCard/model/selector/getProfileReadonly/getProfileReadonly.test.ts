import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonyl test', () => {
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        }
        expect(getProfileReadonly(state as StateSchema)).toBe(true)
    })
    test('test empty selector', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toBe(undefined)
    })
})
