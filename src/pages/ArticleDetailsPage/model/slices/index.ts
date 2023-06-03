import { combineReducers } from '@reduxjs/toolkit'

import { type ArticleDetailsPageSchema } from '../types'

import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { ArticleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: ArticleDetailsCommentsReducer,
        recommendations: ArticleDetailsPageRecommendationsReducer,
    })
