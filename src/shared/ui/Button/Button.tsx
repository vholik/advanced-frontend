import { type ButtonHTMLAttributes, type FC } from 'react'

import cls from './Button.module.scss'

import { type Mods, classNames } from '@/shared/lib/classNames/classNames'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    STRETCH = 'stretch',
}

export enum ButtonSize {
    SM = 'size_sm',
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

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    }

    return (
        <button
            type="button"
            {...other}
            disabled={disabled}
            className={classNames(cls.Button, mods, [
                className,
                theme ? cls[theme] : undefined,
            ])}>
            {children}
        </button>
    )
}
