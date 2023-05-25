import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = memo((props) => {
    const { className, text, title, theme = TextTheme.PRIMARY } = props
    return (
        <div
            className={classNames(cls.Text, { [cls[theme]]: true }, [
                className,
            ])}
        >
            {title && <h2 className={cls.title}>{title}</h2>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
