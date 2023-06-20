import { type FC, memo, useMemo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Tabs, type TabItem } from '@/shared/ui/Tabs'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props) => {
    const { className, value, onChangeType } = props
    const { t } = useTranslation()

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('All articles'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Economics'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Science'),
            },
        ],
        [t],
    )

    const onTabClick = useCallback(
        (type: ArticleType) => {
            onChangeType(type)
        },
        [onChangeType],
    )

    return (
        <Tabs
            items={typeTabs}
            onChange={onTabClick}
            value={value}
            className={classNames('', {}, [className])}
        />
    )
})
