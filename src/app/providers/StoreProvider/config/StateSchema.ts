import {
    type ReducersMapObject,
    type EnhancedStore,
    type Reducer,
    type CombinedState,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'

import { type ArticleDetailsSchema } from '@/entities/Article'
import { type CounterSchema } from '@/entities/Counter'
import { type UserSchema } from '@/entities/User'
import { type AddCommentFormSchema } from '@/features/AddCommentForm'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ProfileSchema } from '@/features/editableProfileCard'
import { type RestoreScrollSchema } from '@/features/RestoreScroll'
import { type ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { type ArticlesPagesSchema } from '@/pages/ArticlesPage'
import { type rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPagesSchema
    restoreScroll: RestoreScrollSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: any) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<RejectValueType> {
    rejectValue: RejectValueType
    extra: ThunkExtraArg
    state: StateSchema
}
