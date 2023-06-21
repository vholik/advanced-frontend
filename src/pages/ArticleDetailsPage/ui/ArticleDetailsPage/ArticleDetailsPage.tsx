import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import cls from './ArticleDetailsPage.module.scss'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

import { ArticleDetails } from '@/entities/Article'
import { ArticleRating } from '@/features/AddCommentForm'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Note } from '@/shared/ui/Note'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/Card'

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
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled')
    const isCounterEnabled = getFeatureFlag('isCounterEnabled')

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

    const articleRatingCard = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRating articleId={id} />,
        off: () => <Text text={t('Article rating will be soon')} />,
    })

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={reducers}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <div className={cls.inner}>
                    <ArticleDetailsPageHeader />
                    <VStack
                        align="center"
                        gap="32">
                        <ArticleDetails id={id} />

                        {isArticleRatingEnabled && (
                            <ArticleRating articleId={id} />
                        )}
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
