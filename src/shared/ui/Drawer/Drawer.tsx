import { type FC, memo, type ReactNode, useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './Drawer.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import {
    AnimationProvider,
    useAnimationModules,
} from '@/shared/lib/components/AnimationProvider'

interface DrawerProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const height = window.innerHeight - 100

const DrawerContent: FC<DrawerProps> = memo((props) => {
    const { Gesture, Spring } = useAnimationModules()
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))
    const { className, children, isOpen, onClose, lazy } = props
    const { t } = useTranslation()

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false })
    }, [api])

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        })
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel()

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close()
                } else {
                    openDrawer()
                }
            } else {
                api.start({ y: my, immediate: true })
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        },
    )

    useEffect(() => {
        if (isOpen) {
            openDrawer()
        }
    }, [api, isOpen, openDrawer])

    const mods: Mods = {
        [cls.opened]: isOpen,
    }

    if (!isOpen) {
        return null
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className])}>
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cls.sheet}
                    {...bind()}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y,
                    }}>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    )
})

const DrawerAsync = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationModules()

    if (!isLoaded) {
        return null
    }

    return <DrawerContent {...props} />
})

export const Drawer = memo((props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    )
})
