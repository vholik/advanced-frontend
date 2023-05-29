import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleTextBlock } from 'entities/Article/model/types/article'
import {
    Text,
    TextColor,
    TextSize,
    TextTheme,
    TextWeight,
} from 'shared/ui/Text/Text'

import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
    memo((props) => {
        const { className, block } = props
        const { t } = useTranslation()

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <Text title={block.title} weight={TextWeight.BOLD} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        size={TextSize.L}
                        text={paragraph}
                        key={paragraph}
                        color={TextColor.PRIMARY}
                        className={cls.paragraph}
                        theme={TextTheme.SERIF}
                    />
                ))}
            </div>
        )
    })
