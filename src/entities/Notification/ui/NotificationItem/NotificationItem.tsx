import { type FC, memo } from 'react'

import cls from './NotificationItem.module.scss'
import { type Notification } from '../../model/types/notification'


import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Text, TextSize } from '@/shared/ui/Text'



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
