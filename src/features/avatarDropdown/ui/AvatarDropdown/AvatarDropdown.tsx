import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Dropdown } from 'shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'

import cls from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {
    const { className } = props
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const authData = useSelector(getUserAuthData)

    const isAdminPanelAvailable = isAdmin || isManager

    const onLogout = () => {
        dispatch(userActions.logout())
    }

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom left"
            items={[
                { content: t('Log out'), onClick: onLogout },
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData?.id,
                },
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Panel'),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
            ]}
            trigger={<Avatar src={authData?.avatar} size={32} />}
        />
    )
})
