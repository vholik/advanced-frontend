import { combineReducers } from '@reduxjs/toolkit'

import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { ArticleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'
import { type ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: ArticleDetailsCommentsReducer,
        recommendations: ArticleDetailsPageRecommendationsReducer,
    })
