import { type FC, memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal/useModal'

import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

import cls from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, isOpen, onClose, lazy } = props

    const { close, isClosing, isMounted } = useModal({ isOpen, onClose, lazy })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={close} />
                <div className={classNames(cls.content)}>{children}</div>
            </div>
        </Portal>
    )
})
