import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { type ArticleView, type Article } from 'entities/Article'
import { avatarLink } from 'shared/const/tests'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ArticleViewSelector } from 'features/ArticleViewSelector'

import {
    articlePageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'

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
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)
    const error = useSelector(getArticlesPageError)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch]
    )

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlePageActions.initView())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector onViewClick={onChangeView} view={view} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
