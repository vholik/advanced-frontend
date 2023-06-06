import { type FC, memo, ReactNode, type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Card: FC<CardProps> = memo(({ className, children, ...other }) => {
    return (
        <article {...other} className={classNames(cls.Card, {}, [className])}>
            {children}
        </article>
    )
})
