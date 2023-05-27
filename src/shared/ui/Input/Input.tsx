import { memo, type FC, type InputHTMLAttributes } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'

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
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        readonly,
        ...other
    } = props

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
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
