import { type FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './ArticlesPageFilters.module.scss'
import {
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlePageActions } from '../../model/slice/articlesPageSlice'

import {
    type ArticlesSortField,
    type ArticleView,
    type ArticleType,
} from '@/entities/Article'
import { ArticleSortSelect } from '@/features/ArticleSortSelect'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/shared/types'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
    (props) => {
        const { className } = props
        const { t } = useTranslation()
        const view = useSelector(getArticlesPageView)
        const dispatch = useAppDispatch()
        const order = useSelector(getArticlesPageOrder)
        const sort = useSelector(getArticlesPageSort)
        const tab = useSelector(getArticlesPageType)

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }))
        }, [dispatch])

        const debounceFetchData = useDebounce(fetchData, 500)

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlePageActions.setView(view))
                dispatch(articlePageActions.setPage(1))
                debounceFetchData()
            },
            [debounceFetchData, dispatch],
        )

        const onChangeSort = useCallback(
            (newSort: ArticlesSortField) => {
                dispatch(articlePageActions.setSort(newSort))
                dispatch(articlePageActions.setPage(1))
                debounceFetchData()
            },
            [dispatch, debounceFetchData],
        )

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlePageActions.setPage(1))
                dispatch(articlePageActions.setOrder(newOrder))
                debounceFetchData()
            },
            [dispatch, debounceFetchData],
        )

        const onChangeType = useCallback(
            (tab: ArticleType) => {
                dispatch(articlePageActions.setType(tab))
                dispatch(articlePageActions.setPage(1))
                debounceFetchData()
            },
            [dispatch, debounceFetchData],
        )

        return (
            <div
                className={classNames(cls.ArticlesPageFilters, {}, [
                    className,
                ])}>
                <ArticleTypeTabs
                    value={tab}
                    onChangeType={onChangeType}
                />
                <div className={cls.row}>
                    <ArticleSortSelect
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />

                    <ArticleViewSelector
                        onViewClick={onChangeView}
                        view={view}
                    />
                </div>
            </div>
        )
    },
)
