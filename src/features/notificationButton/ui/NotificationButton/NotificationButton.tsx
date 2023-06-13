import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Popover } from 'shared/ui/Popups'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon, IconColor } from 'shared/ui/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'

import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <Popover
            direction="bottom left"
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={
                <Button theme={ThemeButton.CLEAR}>
                    <Icon Icon={NotificationIcon} color={IconColor.SECONDARY} />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
})
