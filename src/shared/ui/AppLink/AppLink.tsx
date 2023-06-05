import { memo, type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    PRIMARY_VARIANT = 'primary_variant',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...other
    } = props

    return (
        <Link
            to={to}
            {...other}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    )
})
