import { memo, type FC } from 'react'
import { type Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    SERIF = 'serif',
}

export enum TextSize {
    S = 'size_sm',
    M = 'size_m',
    L = 'size_l',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextWeight {
    REGULAR = 'weight_regular',
    MEDIUM = 'weight_medium',
    SEMIBOLD = 'weight_semibold',
    BOLD = 'weight_bold',
    DEFAULT = 'weight_default',
}

export enum TextColor {
    PRIMARY = 'primary_color',
    SECONDARY = 'secondary_color',
    UNSET = 'unset',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    color?: TextColor
    weight?: TextWeight
    'data-testid'?: string
}

type HeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        color = TextColor.UNSET,
        weight = TextWeight.DEFAULT,
        'data-testid': dataTestId = '',
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
        [cls[weight]]: true,
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={classNames(cls.title, {}, [cls[color]])}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={classNames(cls.text, {}, [cls[color]])}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
