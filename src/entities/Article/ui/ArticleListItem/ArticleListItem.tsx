import {
    type FC,
    memo,
    useCallback,
    type HTMLAttributeAnchorTarget,
} from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import cls from './ArticleListItem.module.scss'
import { ArticleBlockType, ArticleView } from '../../model/conts/articleConsts'
import { type Article, type ArticleTextBlock } from '../../model/types/article'

import EyeIcon from '@/shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon, IconColor } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import {
    Text,
    TextColor,
    TextSize,
    TextTheme,
    TextWeight,
} from '@/shared/ui/Text'

interface ArticleListItemProps {
    className?: string
    view: ArticleView
    article?: Article
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, view, target } = props
    const { t } = useTranslation()
    const navigate = useNavigate()

    const textBlock = article?.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock

    const onOpenArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleDetails(article?.id))
        }
    }, [article?.id, navigate])

    return (
        <AppLink
            to={getRouteArticleDetails(article?.id || '')}
            target={target}
            data-testid="ArticleListItem">
            <Card
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}>
                <AppImage
                    fallback={<Skeleton height={220} />}
                    src={article?.img}
                    alt={article?.title}
                    className={cls.coverImg}
                />
                <div className={cls.infoWrapper}>
                    <div className={cls.heading}>
                        <Text
                            className={cls.title}
                            title={article?.title}
                            weight={TextWeight.BOLD}
                        />
                        <Text
                            className={cls.createdAt}
                            text={article?.createdAt}
                            size={TextSize.S}
                        />
                    </div>
                    {view === ArticleView.LIST && (
                        <Text
                            className={cls.subtitle}
                            text={textBlock.paragraphs[0]}
                            theme={TextTheme.SERIF}
                            color={TextColor.PRIMARY}
                        />
                    )}
                    {view === ArticleView.LIST && (
                        <div className={cls.user}>
                            <Avatar
                                size={32}
                                src={article?.user.avatar}
                            />
                            <Text
                                text={article?.user.username}
                                color={TextColor.PRIMARY}
                                weight={TextWeight.MEDIUM}
                                size={TextSize.S}
                            />
                        </div>
                    )}
                    <div className={cls.bottom}>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            className={cls.button}
                            onClick={onOpenArticle}>
                            {t('Read more')}
                        </Button>
                        <div className={cls.statistics}>
                            <Icon
                                Svg={EyeIcon}
                                color={IconColor.TERTIARY}
                            />
                            <Text
                                text={String(article?.views)}
                                size={TextSize.S}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </AppLink>
    )
})
