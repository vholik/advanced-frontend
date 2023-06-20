import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

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
            className={classNames('', {}, [className])}
            direction="bottom right"
            items={[
                { content: t('Log out'), onClick: onLogout },
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id),
                },
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Panel'),
                              href: getRouteAdminPanel(),
                          },
                      ]
                    : []),
            ]}
            trigger={
                <Avatar
                    src={authData?.avatar}
                    size={32}
                />
            }
        />
    )
})
