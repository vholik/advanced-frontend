import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { type Comment } from '../../model/types/comment'

import cls from './CommentCard.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Text, TextColor, TextWeight } from '@/shared/ui/Text/Text'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/const/router'
import { HStack, VStack } from '@/shared/ui/Stack'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <VStack gap="4">
                    <HStack align="center">
                        <Skeleton height={32} width={32} circle />
                        <Skeleton
                            height={21}
                            width={100}
                            className={cls.user}
                        />
                    </HStack>
                    <Skeleton
                        count={2}
                        width={550}
                        height={15}
                        className={cls.skeleton}
                    />
                </VStack>
            </div>
        )
    }

    if (!comment) return null

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                <HStack max>
                    <Avatar size={32} src={comment.user.avatar} />
                    <Text
                        text={comment.user.username}
                        className={cls.user}
                        color={TextColor.PRIMARY}
                        weight={TextWeight.MEDIUM}
                    />
                </HStack>
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </div>
    )
})
