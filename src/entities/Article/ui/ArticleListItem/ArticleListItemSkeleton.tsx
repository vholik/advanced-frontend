import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleView } from 'entities/Article/model/types/article'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
    ({ className, view }) => {
        if (view === ArticleView.GRID) {
            return (
                <Card
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Skeleton height={250} width={250} />
                    <div className={cls.infoWrapper}>
                        <Skeleton height={15} width={200} />
                        <Skeleton height={15} width={150} />
                        <div className={cls.bottom}>
                            <Skeleton height={10} width={40} />
                        </div>
                    </div>
                </Card>
            )
        }

        return (
            <Card
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Skeleton height={220} width={200} />
                <div className={cls.infoWrapper}>
                    <Skeleton height={15} width={400} />
                    <Skeleton height={15} width={250} />
                    <div className={cls.user}>
                        <Skeleton circle height={32} width={32} />
                        <Skeleton height={10} width={40} />
                    </div>
                </div>
            </Card>
        )
    }
)
