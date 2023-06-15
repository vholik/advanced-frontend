import { FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
    const { className, articleId } = props
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    })

    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    articleId,
                    rate: starsCount,
                    userId: userData?.id ?? '',
                    feedback,
                })
            } catch (error) {
                console.log(error)
            }
        },
        [articleId, rateArticleMutation, userData?.id]
    )

    const onCancel = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback)
        },
        [handleRateArticle]
    )

    const onAccept = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount)
        },
        [handleRateArticle]
    )

    if (isLoading) {
        return <Skeleton width={500} height={120} />
    }

    const rating = data?.[0]

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Rate article')}
            feedbackTitle={t('Please describe your rating')}
            hasFeeback
        />
    )
})

export default ArticleRating
