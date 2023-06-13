import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Overlay.module.scss'

interface OverlayProps {
    className?: string
    onClick?: () => void
}

export const Overlay: FC<OverlayProps> = memo((props) => {
    const { className, onClick } = props

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        ></div>
    )
})
