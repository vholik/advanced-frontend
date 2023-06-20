import { getProfileReadonly } from './getProfileReadonly'

import { type StateSchema } from '@/app/providers/StoreProvider'

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
