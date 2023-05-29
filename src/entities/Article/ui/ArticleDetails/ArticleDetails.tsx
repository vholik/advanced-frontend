import { useEffect, type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import { Note } from 'shared/ui/Note/Note'
import { Text, TextAlign, TextColor, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import EyeIcon from 'shared/assets/icons/eye.svg'
import DateIcon from 'shared/assets/icons/date.svg'
import {
    type ArticleBlock,
    ArticleBlockType,
} from 'entities/Article/model/types/article'
import { Icon } from 'shared/ui/Icon/Icon'

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'

import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const data = useSelector(getArticleDetailsData)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        className={cls.block}
                        key={block.id}
                        block={block}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        className={cls.block}
                        key={block.id}
                        block={block}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        block={block}
                        key={block.id}
                        className={cls.block}
                    />
                )
            default:
                return null
        }
    }, [])

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton height={50} width={500} className={cls.skeleton} />
                <div className={cls.avatar}>
                    <Skeleton height={50} width={50} circle />
                    <Skeleton height={15} width={50} count={2} />
                </div>
                <div className={cls.box}>
                    <Skeleton
                        count={6}
                        width={400}
                        height={32}
                        className={cls.skeleton}
                    />
                </div>
                <div className={cls.box}>
                    <Skeleton
                        count={6}
                        width={400}
                        height={32}
                        className={cls.skeleton}
                    />
                </div>
            </>
        )
    } else if (error) {
        content = (
            <Note>
                <Text align={TextAlign.CENTER} text={t('Error occured')} />
            </Note>
        )
    } else {
        content = (
            <>
                <Text
                    title={data?.title}
                    size={TextSize.XL}
                    className={cls.title}
                />
                <Text
                    text={data?.subtitle}
                    className={cls.subtitle}
                    size={TextSize.XL}
                    color={TextColor.SECONDARY}
                />
                <div className={cls.row}>
                    <div className={cls.stats}>
                        <Icon Icon={EyeIcon} />
                        <Text
                            text={String(data?.views)}
                            size={TextSize.SMALL}
                        />
                    </div>
                    <div className={cls.stats}>
                        <Icon Icon={DateIcon} />
                        <Text
                            text={String(data?.createdAt)}
                            size={TextSize.SMALL}
                        />
                    </div>
                </div>
                <img src={data?.img} alt={data?.title} className={cls.photo} />
                {data?.blocks.map(renderBlock)}
            </>
        )
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
