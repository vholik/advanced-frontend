import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './ArticleViewSelector.module.scss'

import { ArticleView } from '@/entities/Article'
import GridIcon from '@/shared/assets/icons/grid.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Icon, IconColor } from '@/shared/ui/Icon'

interface ArticleViewSelectorProps {
    className?: string
    onViewClick?: (view: ArticleView) => void
    view: ArticleView
}

const viewTypes = [
    { view: ArticleView.LIST, icon: ListIcon },
    { view: ArticleView.GRID, icon: GridIcon },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props) => {
        const { className, onViewClick, view } = props
        const { t } = useTranslation()

        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView)
        }

        return (
            <div
                className={classNames(cls.ArticleViewSelector, {}, [className])}
            >
                {viewTypes.map((viewType) => (
                    <Button
                        theme={ThemeButton.CLEAR}
                        onClick={onClick(viewType.view)}
                        key={viewType.view}
                    >
                        <Icon
                            Svg={viewType.icon}
                            color={
                                view === viewType.view
                                    ? IconColor.PRIMARY
                                    : IconColor.TERTIARY
                            }
                        />
                    </Button>
                ))}
            </div>
        )
    }
)
