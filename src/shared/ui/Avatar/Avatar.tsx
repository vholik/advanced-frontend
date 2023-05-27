import { useMemo, type FC, type CSSProperties } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar: FC<AvatarProps> = ({ className, src, alt, size }) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || '10rem',
            height: size || '10rem',
        }
    }, [size])

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt || 'avatar'}
        />
    )
}
