import { type FC, memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'center' | 'start' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    between: cls.justifyBetween,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    column: cls.directionColumn,
    row: cls.directionRow,
}

const gapClasses: Record<FlexGap, string> = {
    '8': cls.gap8,
    '4': cls.gap4,
    '16': cls.gap16,
    '32': cls.gap32,
}

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

export const Flex: FC<FlexProps> = memo(
    ({
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = '4',
        max,
    }) => {
        const classes = [
            className,
            justifyClasses[justify],
            alignClasses[align],
            directionClasses[direction],
            gapClasses[gap],
        ]

        const mods = {
            [cls.max]: max,
        }

        return (
            <div className={classNames(cls.Flex, mods, classes)}>
                {children}
            </div>
        )
    }
)
