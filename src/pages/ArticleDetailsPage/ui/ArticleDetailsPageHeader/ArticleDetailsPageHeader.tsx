import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getCanEditArticle } from '../../model/selectors/article'

import cls from './ArticleDetailsPageHeader.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { getUserAuthData } from '@/entities/User'
import { getArticleDetailsData } from '@/entities/Article'
import { RoutePath } from '@/shared/const/router'

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
            navigate(`${`${RoutePath.articles}/${article?.id}`}/edit`)
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
