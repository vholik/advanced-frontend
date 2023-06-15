import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'


import cls from './SidebarItem.module.scss'
import { type SidebarItemType } from '../../model/types/sidebar'


import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ collapsed, item }) => {
    const { t } = useTranslation()

    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

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
