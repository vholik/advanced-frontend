import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ArticleTextBlock } from 'entities/Article/model/types/article'
import { Text, TextSize } from 'shared/ui/Text/Text'

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
                {block.title && <Text title={block.title} />}
                {block.paragraphs.map((paragraph, index) => (
                    <Text
                        size={TextSize.XL}
                        text={paragraph}
                        key={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        )
    })
