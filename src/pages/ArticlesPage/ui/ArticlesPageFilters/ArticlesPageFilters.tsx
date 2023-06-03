import { type FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { useSelector } from 'react-redux'
import {
    type ArticlesSortField,
    type ArticleView,
    type ArticleType,
} from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticleSortSelect } from 'features/ArticleSortSelect'
import { type SortOrder } from 'shared/types'
import { Input } from 'shared/ui/Input/Input'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleTypeTabs } from 'features/ArticleTypeTabs'

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { articlePageActions } from '../../model/slice/articlesPageSlice'

import cls from './ArticlesPageFilters.module.scss'

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
        const search = useSelector(getArticlesPageSearch)
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
            [debounceFetchData, dispatch]
        )

        const onChangeSort = useCallback(
            (newSort: ArticlesSortField) => {
                dispatch(articlePageActions.setSort(newSort))
                dispatch(articlePageActions.setPage(1))
                debounceFetchData()
            },
            [dispatch, debounceFetchData]
        )

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlePageActions.setPage(1))
                dispatch(articlePageActions.setOrder(newOrder))
                debounceFetchData()
            },
            [dispatch, debounceFetchData]
        )

        const onChangeSearch = useCallback(
            (value: string) => {
                dispatch(articlePageActions.setPage(1))
                dispatch(articlePageActions.setSearch(value))
                debounceFetchData()
            },
            [dispatch, debounceFetchData]
        )

        const onChangeType = useCallback(
            (tab: ArticleType) => {
                dispatch(articlePageActions.setType(tab))
                dispatch(articlePageActions.setPage(1))
                debounceFetchData()
            },
            [dispatch, debounceFetchData]
        )

        return (
            <div
                className={classNames(cls.ArticlesPageFilters, {}, [className])}
            >
                <ArticleTypeTabs value={tab} onChangeType={onChangeType} />
                <ArticleSortSelect
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Search')}
                />
                <ArticleViewSelector onViewClick={onChangeView} view={view} />
            </div>
        )
    }
)
