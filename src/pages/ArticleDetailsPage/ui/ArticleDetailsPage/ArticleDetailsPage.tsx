import { memo, type FC, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails, ArticleView } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Note } from 'shared/ui/Note/Note'
import {
    Text,
    TextAlign,
    TextColor,
    TextSize,
    TextTheme,
    TextWeight,
} from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/AddCommentForm'
import { Page } from 'widgets/Page/Page'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'

import { addCommmentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleReccomendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
    getArticleCommentsIsLoading,
    getArticleCommentsError,
} from '../../model/selectors/comments'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendation'
import { articleDetailsPageReducer } from '../../model/slices'
import {
    ArticleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice'
import {
    ArticleDetailsPageRecommendationsReducer,
    getArticleReccomendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommendations = useSelector(getArticleReccomendations.selectAll)
    const recommendationsIsLoading = useSelector(
        getArticleReccomendationsIsLoading
    )

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
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
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    text={t('Article not found')}
                />
            </Note>
        )
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <div className={cls.inner}>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        text={`${t('Comments')}:`}
                        weight={TextWeight.MEDIUM}
                        color={TextColor.PRIMARY}
                        size={TextSize.M}
                        className={cls.title}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        comments={comments}
                        isLoading={commentIsLoading}
                    />
                    <Text
                        text={`${t('Also read')}:`}
                        weight={TextWeight.MEDIUM}
                        color={TextColor.PRIMARY}
                        size={TextSize.M}
                        className={cls.title}
                    />
                    <ArticleList
                        className={cls.recommendations}
                        view={ArticleView.GRID}
                        isLoading={recommendationsIsLoading}
                        articles={recommendations}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
