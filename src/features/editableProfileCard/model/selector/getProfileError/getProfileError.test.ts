import { getProfileError } from './getProfileError'

import { type StateSchema } from '@/app/providers/StoreProvider'


describe('getProfileError test', () => {
    test('test selector', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Hello',
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual('Hello')
    })
    test('test empty selector', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
