import { memo, type FC, type InputHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input: FC<InputProps> = memo((props) => {
    const { className, value, onChange, type = 'text', ...other } = props

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    return (
        <input
            {...other}
            className={classNames(cls.Input, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            type={type}
        />
    )
})
