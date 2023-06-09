import { type Profile } from 'entities/Profile'

import { type ValidateProfileError } from '../consts/consts'

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    form?: Profile
    validateError?: ValidateProfileError[]
}
