import { type FC, memo, type HTMLAttributes } from 'react'

import cls from './Card.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Card: FC<CardProps> = memo(({ className, children, ...other }) => {
    return (
        <article
            {...other}
            className={classNames(cls.Card, {}, [className])}>
            {children}
        </article>
    )
})
