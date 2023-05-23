import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <Button onClick={onToggleModal}>{t('Log in')}</Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
                // eslint-disable-next-line i18next/no-literal-string
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus odio iure asperiores perferendis iste aperiam facilis
                earum ea repudiandae voluptatem ducimus eligendi non voluptas
                excepturi, vel sequi maxime accusantium officiis tempore nulla
                sed necessitatibus. Error in officiis aperiam corrupti dolore
                voluptate quidem earum, omnis rem? Consectetur, quaerat cumque?
                Natus, laborum.
            </Modal>
        </div>
    )
}
