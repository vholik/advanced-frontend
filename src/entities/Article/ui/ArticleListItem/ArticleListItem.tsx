import {
    type FC,
    memo,
    useCallback,
    type HTMLAttributeAnchorTarget,
} from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    Text,
    TextColor,
    TextSize,
    TextTheme,
    TextWeight,
} from '@/shared/ui/Text/Text'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Icon, IconColor } from '@/shared/ui/Icon/Icon'
import { Card } from '@/shared/ui/Card/Card'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

import { ArticleBlockType, ArticleView } from '../../model/conts/articleConsts'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import cls from './ArticleListItem.module.scss'

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
        (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article?.id)
    }, [article?.id, navigate])

    return (
        <AppLink to={RoutePath.article_details + article?.id} target={target}>
            <Card
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <img
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
                            <Avatar size={32} src={article?.user.avatar} />
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
                            onClick={onOpenArticle}
                        >
                            {t('Read more')}
                        </Button>
                        <div className={cls.statistics}>
                            <Icon Icon={EyeIcon} color={IconColor.TERTIARY} />
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
