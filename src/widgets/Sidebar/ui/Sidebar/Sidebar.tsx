import { type FC, useState, useMemo, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems'

import { SidebarItem } from '../SidebarItem/SidebarItem'

import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))
    }, [collapsed, sidebarItemsList])

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ThemeButton.OUTLINE}
                type="button"
                square
                size={ButtonSize.XL}
                onClick={onToggle}
                className={cls.collapsedBtn}
                data-testid="toggle-button"
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cls.links}>{itemsList}</div>
            <LangSwitcher collapsed={collapsed} />
        </div>
    )
})
