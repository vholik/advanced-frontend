import { memo, type FC } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextSize {
    SMALL = 'size_sm',
    M = 'size_m',
    XL = 'size_xl',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextColor {
    PRIMARY = 'primary_color',
    SECONDARY = 'secondary_color',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
    color?: TextColor
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        color = TextColor.PRIMARY,
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    }

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <h2 className={classNames(cls.title, {}, [cls[color]])}>
                    {title}
                </h2>
            )}
            {text && (
                <p className={classNames(cls.text, {}, [cls[color]])}>{text}</p>
            )}
        </div>
    )
})
