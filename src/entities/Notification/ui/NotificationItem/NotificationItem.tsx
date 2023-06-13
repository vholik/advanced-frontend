import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'shared/ui/Card/Card'
import { Text, TextColor, TextSize } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui/AppLink/AppLink'

import { type Notification } from '../../model/types/notification'

import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const { className, item } = props

    const content = (
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            <Text size={TextSize.S} title={item.title} />
            <Text text={item.description} />
        </div>
    )

    if (item.href) {
        return (
            <AppLink
                className={cls.link}
                to={item.href}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </AppLink>
        )
    }

    return content
})
