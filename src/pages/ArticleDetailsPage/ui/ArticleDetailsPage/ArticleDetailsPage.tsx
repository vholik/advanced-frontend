import { memo, type FC, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Note } from 'shared/ui/Note/Note'
import {
    Text,
    TextAlign,
    TextColor,
    TextSize,
    TextWeight,
} from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    ArticleDetailsCommentsReducer,
    getArticleComments,
} from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
    getArticleCommentsIsLoading,
    getArticleCommentsError,
} from 'pages/ArticleDetailsPage/model/selectors/comments'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommmentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'

import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: ArticleDetailsCommentsReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const error = useSelector(getArticleCommentsError)

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommmentForArticle(text))
        },
        [dispatch]
    )

    if (!id) {
        return (
            <Note>
                <Text align={TextAlign.CENTER} text={t('Article not found')} />
            </Note>
        )
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <ArticleDetails id={id} />
                <Text
                    text={`${t('Comments')}:`}
                    weight={TextWeight.MEDIUM}
                    color={TextColor.PRIMARY}
                    size={TextSize.M}
                    className={cls.title}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
