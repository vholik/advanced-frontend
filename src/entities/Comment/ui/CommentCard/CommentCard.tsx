import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextColor, TextWeight } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

import { type Comment } from '../../model/types/comment'

import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton height={32} width={32} circle />
                    <Skeleton height={21} width={100} className={cls.user} />
                </div>
                <Skeleton
                    count={2}
                    width={550}
                    height={15}
                    className={cls.skeleton}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <Avatar size={32} src={comment.user.avatar} />
                <Text
                    text={comment.user.username}
                    className={cls.user}
                    color={TextColor.PRIMARY}
                    weight={TextWeight.MEDIUM}
                />
            </div>
            <Text text={comment.text} className={cls.text} />
        </div>
    )
})
