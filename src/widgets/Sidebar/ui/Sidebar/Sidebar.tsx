import { type FC, useState, useMemo, memo } from 'react'

import { useSelector } from 'react-redux'

import cls from './Sidebar.module.scss'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'

import Logo from '@/shared/assets/icons/logo.svg'
import { getRouteMain } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button'
import { Icon, IconColor } from '@/shared/ui/Icon'
import { LangSwitcher } from '@/shared/ui/LangSwitcher'
import { VStack } from '@/shared/ui/Stack'

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
            <SidebarItem
                item={item}
                key={item.path}
                collapsed={collapsed}
            />
        ))
    }, [collapsed, sidebarItemsList])

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}>
            <Button
                theme={ThemeButton.OUTLINE}
                type="button"
                square
                size={ButtonSize.XL}
                onClick={onToggle}
                className={cls.collapsedBtn}
                data-testid="toggle-button">
                {collapsed ? '<' : '>'}
            </Button>

            <VStack
                gap="32"
                role="navigation">
                <AppLink
                    to={getRouteMain()}
                    className={cls.logo}>
                    <Icon
                        Svg={Logo}
                        color={IconColor.PRIMARY}
                    />
                </AppLink>
                <VStack gap="32">
                    <VStack>{itemsList}</VStack>
                </VStack>
            </VStack>

            <LangSwitcher
                collapsed={collapsed}
                className={cls.langSwitcher}
            />
        </aside>
    )
})
