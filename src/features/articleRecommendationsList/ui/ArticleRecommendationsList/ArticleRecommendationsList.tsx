import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { Text, TextColor, TextSize, TextWeight } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { rtkApi } from 'shared/api/rtkApi'

import {
    recommendationsApi,
    useArticleRecommendationsQuery,
} from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props
        const { t } = useTranslation()

        const { isLoading, data: recommendations } =
            useArticleRecommendationsQuery(3)

        return (
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text
                    text={`${t('Also read')}:`}
                    weight={TextWeight.MEDIUM}
                    color={TextColor.PRIMARY}
                    size={TextSize.M}
                />
                <ArticleList
                    view={ArticleView.GRID}
                    isLoading={isLoading}
                    articles={recommendations}
                />
            </VStack>
        )
    }
)
