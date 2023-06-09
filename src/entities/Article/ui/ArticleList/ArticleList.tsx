import { type FC, memo, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleView } from '../../model/conts/articleConsts'
import { type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleListItemSkeleton view={view} key={index} />)
}

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const {
        className,
        view = ArticleView.GRID,
        isLoading,
        articles,
        target,
    } = props
    const { t } = useTranslation()

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    )

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles && articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
})
