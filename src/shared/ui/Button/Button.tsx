import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    STRETCH = 'stretch',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...other
    } = props

    const mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    }

    return (
        <button
            type="button"
            {...other}
            disabled={disabled}
            className={classNames(cls.Button, mods, [className])}
        >
            {children}
        </button>
    )
}
