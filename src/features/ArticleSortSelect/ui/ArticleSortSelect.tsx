import { type FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    CustomSelect,
    type SelectOption,
} from '@/shared/ui/CustomSelect/CustomSelect'
import { ArticlesSortField } from '@/entities/Article'
import { type SortOrder } from '@/shared/types'
import FilterIcon from '@/shared/assets/icons/filter.svg'
import { Icon, IconColor } from '@/shared/ui/Icon/Icon'

import cls from './ArticleSortSelect.module.scss'

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

        [t]
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
        [t]
    )

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Icon
                Icon={FilterIcon}
                color={IconColor.SECONDARY}
                className={cls.icon}
            />
            <CustomSelect
                options={sortFieldOptions}
                label={t('Sort by parameter')}
                value={sort}
                onChange={onChangeSort}
            />
            <CustomSelect
                options={orderOptions}
                label={t('Sort by growth')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
})
