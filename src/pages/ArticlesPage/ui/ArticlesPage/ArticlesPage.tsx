import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Article'
import { type ArticleView, type Article } from 'entities/Article'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { Page } from 'widgets/Page/Page'
import { Note } from 'shared/ui/Note/Note'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useSearchParams } from 'react-router-dom'

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import {
    articlePageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice'
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
    getArticlesPageNum,
} from '../../model/selectors/articlesPageSelector'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'

import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                storeScroll
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <div className={cls.inner}>
                    <ArticlesPageFilters />
                    <ArticlesInfiniteList searchParams={searchParams} />
                </div>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
