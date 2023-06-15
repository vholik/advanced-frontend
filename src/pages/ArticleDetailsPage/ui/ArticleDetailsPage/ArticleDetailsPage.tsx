import { memo, type FC, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { addCommmentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleReccomendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
    getArticleCommentsIsLoading,
    getArticleCommentsError,
} from '../../model/selectors/comments'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendation'
import { articleDetailsPageReducer } from '../../model/slices'
import {
    ArticleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice'
import {
    ArticleDetailsPageRecommendationsReducer,
    getArticleReccomendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'

import cls from './ArticleDetailsPage.module.scss'

import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList'
import { Page } from '@/widgets/Page/Page'
import { AddCommentForm } from '@/features/AddCommentForm'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { CommentList } from '@/entities/Comment'
import {
    Text,
    TextAlign,
    TextColor,
    TextSize,
    TextTheme,
    TextWeight,
} from '@/shared/ui/Text/Text'
import { Note } from '@/shared/ui/Note/Note'
import { ArticleDetails, ArticleView } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleRating } from '@/features/articleRating'
import { VStack } from '@/shared/ui/Stack'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <Note>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    text={t('Article not found')}
                />
            </Note>
        )
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <div className={cls.inner}>
                    <ArticleDetailsPageHeader />
                    <VStack align="center" gap="32">
                        <ArticleDetails id={id} />

                        <ArticleRating articleId={id} />
                        <VStack gap="32">
                            <ArticleDetailsComments id={id} />
                            <ArticleRecommendationsList />
                        </VStack>
                    </VStack>
                </div>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
