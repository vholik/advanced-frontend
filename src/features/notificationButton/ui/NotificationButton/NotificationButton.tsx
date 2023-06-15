import { type FC, memo, useState, useCallback } from 'react'

import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

import cls from './NotificationButton.module.scss'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon, IconColor } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} color={IconColor.SECONDARY} />
        </Button>
    )

    return (
        <>
            <BrowserView>
                <Popover
                    direction="bottom right"
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    )
})
