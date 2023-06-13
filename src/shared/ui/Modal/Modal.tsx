import {
    type ReactNode,
    type FC,
    useState,
    useRef,
    useEffect,
    useCallback,
} from 'react'
import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const { children, className, isOpen, onClose, lazy } = props
    const { close, isClosing, isMounted } = useModal({ isOpen, lazy, onClose })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div
                    className={classNames(cls.content, {
                        [cls.contentOpened]: isOpen,
                    })}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
}
