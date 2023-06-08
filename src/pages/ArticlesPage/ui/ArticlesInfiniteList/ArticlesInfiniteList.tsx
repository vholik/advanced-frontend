import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Article'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Note } from 'shared/ui/Note/Note'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { getArticles } from '../../model/slice/articlesPageSlice'

import cls from './ArticlesInfiniteList.module.scss'

interface ArticlesInfiniteListProps {
    className?: string
    searchParams?: URLSearchParams
}

export const ArticlesInfiniteList: FC<ArticlesInfiniteListProps> = memo(
    (props) => {
        const { className, searchParams } = props
        const { t } = useTranslation()
        const dispatch = useAppDispatch()

        const articles = useSelector(getArticles.selectAll)
        const isLoading = useSelector(getArticlesPageIsLoading)
        const view = useSelector(getArticlesPageView)
        const error = useSelector(getArticlesPageError)

        useInitialEffect(() => {
            if (searchParams) {
                dispatch(initArticlesPage(searchParams))
            }
        })

        if (error) {
            return (
                <Note>
                    <Text text={t('Error occured')} theme={TextTheme.ERROR} />
                </Note>
            )
        }

        return (
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        )
    }
)
