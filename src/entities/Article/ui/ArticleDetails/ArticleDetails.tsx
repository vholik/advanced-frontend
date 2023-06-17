import { type FC, memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './ArticleDetails.module.scss'
import { ArticleBlockType } from '../../model/conts/articleConsts'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
// import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { type ArticleBlock } from '../../model/types/article'
import { articleDetailsReducer } from '../../testing'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import DateIcon from '@/shared/assets/icons/date.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Icon, IconColor } from '@/shared/ui/Icon'
import { Note } from '@/shared/ui/Note'
import { Skeleton } from '@/shared/ui/Skeleton'
import {
    Text,
    TextAlign,
    TextColor,
    TextSize,
    TextTheme,
    TextWeight,
} from '@/shared/ui/Text'

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
                <Skeleton height={50} width={680} className={cls.skeleton} />
                <div className={cls.avatar}>
                    <Skeleton height={50} width={50} circle />
                    <Skeleton height={15} width={100} count={2} />
                </div>
                <div className={cls.box}>
                    <Skeleton
                        count={6}
                        width={550}
                        height={32}
                        className={cls.skeleton}
                    />
                </div>
                <div className={cls.box}>
                    <Skeleton
                        count={6}
                        width={550}
                        height={32}
                        className={cls.skeleton}
                    />
                </div>
            </>
        )
    } else if (error) {
        content = (
            <Note>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    text={t('Error occured')}
                />
            </Note>
        )
    } else {
        content = (
            <>
                <Text
                    title={data?.title}
                    size={TextSize.L}
                    className={cls.title}
                    weight={TextWeight.BOLD}
                />
                <Text
                    text={data?.subtitle}
                    className={cls.subtitle}
                    size={TextSize.L}
                    color={TextColor.SECONDARY}
                />
                <div className={cls.row}>
                    <div className={cls.stats}>
                        <Icon Svg={EyeIcon} color={IconColor.TERTIARY} />
                        <Text
                            text={String(data?.views)}
                            size={TextSize.S}
                            color={TextColor.SECONDARY}
                        />
                    </div>
                    <div className={cls.stats}>
                        <Icon Svg={DateIcon} color={IconColor.TERTIARY} />
                        <Text
                            text={String(data?.createdAt)}
                            size={TextSize.S}
                            color={TextColor.SECONDARY}
                        />
                    </div>
                </div>
                <img src={data?.img} alt={data?.title} className={cls.photo} />
                {data?.blocks.map(renderBlock)}
            </>
        )
    }

    useInitialEffect(() => {
        dispatch(fetchArticleById(id))
    })

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div
                className={classNames(cls.ArticleDetails, {}, [className])}
                data-testid={'ArticleDetails.Info'}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
