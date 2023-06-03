import {
    type ReducersMapObject,
    type EnhancedStore,
    type Reducer,
    type CombinedState,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type LoginSchema } from 'features/AuthByUsername'
import { type RestoreScrollSchema } from 'features/RestoreScroll'
import {
    type ArticleDetailsPageRecommendationsSchema,
    type ArticleDetailsCommentsSchema,
    type ArticleDetailsPageSchema,
} from 'pages/ArticleDetailsPage'
import { type ArticlesPagesSchema } from 'pages/ArticlesPage'
import {
    type To,
    type NavigateFunction,
    type NavigateOptions,
} from 'react-router-dom'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
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
