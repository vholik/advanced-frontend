import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleView, type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return (
        <div className={classNames(cls.ArticleList, {}, [cls[view]])}>
            {new Array(view === ArticleView.GRID ? 9 : 3)
                .fill(0)
                .map((item, index) => (
                    <ArticleListItemSkeleton view={view} key={index} />
                ))}
        </div>
    )
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, view = ArticleView.GRID, isLoading, articles } = props
    const { t } = useTranslation()

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    )

    if (isLoading) {
        return getSkeletons(view)
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    )
})
