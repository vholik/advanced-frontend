import { type ValidateProfileError } from '../consts/consts'

import { type Profile } from '@/entities/Profile'

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    form?: Profile
    validateError?: ValidateProfileError[]
}
