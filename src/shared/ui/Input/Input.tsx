import { memo, type FC, type InputHTMLAttributes } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import SearchIcon from 'shared/assets/icons/search.svg'

import { Icon, IconColor } from '../Icon/Icon'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
    theme?: InputTheme
    round?: boolean
}

export enum InputTheme {
    PRIMARY = 'primary_theme',
    BASE = 'base_theme',
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        readonly,
        theme = InputTheme.PRIMARY,
        round = false,
        ...other
    } = props

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls[theme]]: true,
        [cls.round]: round,
    }

    return (
        <input
            {...other}
            className={classNames(cls.Input, mods, [className])}
            value={value}
            onChange={onChangeHandler}
            type={type}
            readOnly={readonly}
        />
    )
})
