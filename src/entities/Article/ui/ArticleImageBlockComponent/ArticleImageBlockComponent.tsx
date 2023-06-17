import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from '../../model/types/article'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/Text'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
    memo((props) => {
        const { className, block } = props
        const { t } = useTranslation()

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <Text
                        text={block.title}
                        align={TextAlign.CENTER}
                        className={cls.subtitle}
                    />
                )}
            </div>
        )
    })
