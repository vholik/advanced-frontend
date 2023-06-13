import { type ReactNode, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Label.module.scss'

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
