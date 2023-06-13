import { type FC, memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'

import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

import cls from './Drawer.module.scss'

interface DrawerProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const { className, children, isOpen, onClose } = props
    const { t } = useTranslation()

    const mods: Mods = {
        [cls.opened]: isOpen,
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
})
