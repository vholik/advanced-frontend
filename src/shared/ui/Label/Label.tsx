import { type ReactNode, type FC } from 'react'

import cls from './Label.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'

interface LabelProps {
    className?: string
    value: string
    children?: ReactNode
}

export const Label: FC<LabelProps> = ({ className, children, value }) => {
    return (
        <label className={classNames(cls.Label, {}, [className])}>
            <span className={cls.value}>{value}</span>
            {children}
        </label>
    )
}
