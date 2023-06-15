import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'


import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'

interface CommentListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, isLoading, comments } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        )
    }

    return (
        <VStack max className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text
                    text={t('No comments yet')}
                    className={cls.sectionEmpty}
                    size={TextSize.S}
                />
            )}
        </VStack>
    )
})
