import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const dispatch = useDispatch()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = () => {
        dispatch(userActions.logout())
    }

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <ThemeSwitcher />
                <Button onClick={onLogout}>{t('Log out')}</Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <Button onClick={onOpenModal}>{t('Log in')}</Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </div>
    )
}
