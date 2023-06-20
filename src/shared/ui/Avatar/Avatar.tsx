import { useMemo, type FC, type CSSProperties } from 'react'

import Skeleton from 'react-loading-skeleton'

import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'

import { classNames } from '@/shared/lib/classNames/classNames'

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

    const fallback = (
        <Skeleton
            height={32}
            width={32}
            circle
        />
    )

    return (
        <AppImage
            src={src}
            style={styles}
            fallback={fallback}
            errorFallback={fallback}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt || 'avatar'}
        />
    )
}
