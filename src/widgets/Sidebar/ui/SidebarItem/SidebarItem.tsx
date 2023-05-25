import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ collapsed, item }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.SidebarItem, {}, [])}>
            <AppLink
                to={item.path}
                className={classNames(cls.mainLink, {
                    [cls.collapsed]: collapsed,
                })}
            >
                <item.Icon />
                <span className={cls.linkInner}>{t(item.text)}</span>
            </AppLink>
        </div>
    )
})