import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './NotificationList.module.scss'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()

    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    })

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton
                    width={300}
                    height={15}
                    count={5}
                />
            </VStack>
        )
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    )
})
