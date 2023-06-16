import { type FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import cls from './ArticleDetailsPageHeader.module.scss'
import { getCanEditArticle } from '../../model/selectors/article'

import { getArticleDetailsData } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'
import { getRouteArticleEdit } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
    (props) => {
        const { className } = props
        const { t } = useTranslation('article')
        const navigate = useNavigate()

        const userData = useSelector(getUserAuthData)
        const article = useSelector(getArticleDetailsData)
        const canEdit = useSelector(getCanEditArticle)

        const onEditArticle = useCallback(() => {
            if (article?.id) {
                navigate(getRouteArticleEdit(article?.id))
            }
        }, [article?.id, navigate])

        return (
            <div
                className={classNames(cls.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                {canEdit && (
                    <Button onClick={onEditArticle}>{t('Edit')}</Button>
                )}
            </div>
        )
    }
)
