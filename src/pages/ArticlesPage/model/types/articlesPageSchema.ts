import { type EntityState } from '@reduxjs/toolkit'

import {
    type ArticlesSortField,
    type Article,
    type ArticleView,
    type ArticleType,
} from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sort'

export interface ArticlesPagesSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    page: number
    limit: number
    hasMore: boolean
    // filters

    view: ArticleView
    order: SortOrder
    search: string
    sort: ArticlesSortField
    type: ArticleType

    _inited: boolean
}
