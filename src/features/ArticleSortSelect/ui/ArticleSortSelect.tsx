import { type FC, memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './ArticleSortSelect.module.scss'

import { ArticlesSortField } from '@/entities/Article'
import FilterIcon from '@/shared/assets/icons/filter.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type SortOrder } from '@/shared/types/sort'
import { type SelectOption } from '@/shared/ui/CustomSelect'
import { Icon, IconColor } from '@/shared/ui/Icon'
import { ListBox } from '@/shared/ui/Popups'

interface ArticleSortSelectProps {
    className?: string
    sort: ArticlesSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newOrder: ArticlesSortField) => void
}

export const ArticleSortSelect: FC<ArticleSortSelectProps> = memo((props) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('Sort up'),
            },
            {
                value: 'desc',
                content: t('Sort down'),
            },
        ],

        [t],
    )

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(
        () => [
            {
                value: ArticlesSortField.CREATED,
                content: t('Sort by date'),
            },
            {
                value: ArticlesSortField.TITLE,
                content: t('Sort by title'),
            },

            {
                value: ArticlesSortField.VIEWS,
                content: t('Sort by views'),
            },
        ],
        [t],
    )

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Icon
                Svg={FilterIcon}
                color={IconColor.SECONDARY}
                className={cls.icon}
            />
            <ListBox
                theme="secondary_theme"
                items={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <ListBox
                theme="secondary_theme"
                items={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})
