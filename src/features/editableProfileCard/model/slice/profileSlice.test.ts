import { profileReducer, profileActions } from './profileSlice'
import { type ProfileSchema } from '../types/editableProfileCardSchema'

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true })
    })
    test('test set data', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: '123' } }
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ first: '1234' }),
            ),
        ).toEqual({ form: { first: '1234' } })
    })
})
