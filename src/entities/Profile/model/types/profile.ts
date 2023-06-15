import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'

export interface Profile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
    id?: string
}
