import { memo, type FC, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import cls from './ArticlesPage.module.scss'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'

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
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}>
            <Page
                data-testid="ArticlesPage"
                storeScroll
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}>
                <div className={cls.inner}>
                    <ArticlesPageFilters />
                    <ArticlesInfiniteList searchParams={searchParams} />
                </div>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
