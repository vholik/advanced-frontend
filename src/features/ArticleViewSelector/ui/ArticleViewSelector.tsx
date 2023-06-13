import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleView } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/list.svg'
import GridIcon from '@/shared/assets/icons/grid.svg'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Icon, IconColor } from '@/shared/ui/Icon/Icon'

import cls from './ArticleViewSelector.module.scss'

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
                            Icon={viewType.icon}
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
