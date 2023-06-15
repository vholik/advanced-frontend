import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './ArticleCodeBlockComponent.module.scss'
import { type ArticleCodeBlock } from '../../model/types/article'


import { classNames } from '@/shared/lib/classNames/classNames'
import { Code } from '@/shared/ui/Code'



interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
    memo((props) => {
        const { className, block } = props
        const { t } = useTranslation()

        return (
            <div
                className={classNames(cls.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        )
    })
