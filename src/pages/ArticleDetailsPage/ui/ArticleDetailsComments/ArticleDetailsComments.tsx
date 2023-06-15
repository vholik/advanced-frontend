import { type FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommmentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'

import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/AddCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextColor, TextSize, TextWeight } from '@/shared/ui/Text'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
    (props) => {
        const { className, id } = props
        const { t } = useTranslation()
        const dispatch = useAppDispatch()
        const comments = useSelector(getArticleComments.selectAll)
        const isLoading = useSelector(getArticleCommentsIsLoading)

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id))
        })

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommmentForArticle(text))
            },
            [dispatch]
        )

        return (
            <VStack max className={classNames('', {}, [className])}>
                <VStack gap="8" max>
                    <Text
                        text={`${t('Comments')}:`}
                        weight={TextWeight.MEDIUM}
                        color={TextColor.PRIMARY}
                        size={TextSize.M}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                </VStack>

                <CommentList comments={comments} isLoading={isLoading} />
            </VStack>
        )
    }
)
