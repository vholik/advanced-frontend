import { type Profile, type ValidateProfileError } from 'entities/Profile'

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    form?: Profile
    validateError?: ValidateProfileError[]
}
