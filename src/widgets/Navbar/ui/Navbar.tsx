import { memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import cls from './Navbar.module.scss'

import {
    getUserAuthData,
} from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import {
    articlePageActions,
    getArticlesPageSearch,
    fetchArticlesList,
} from '@/pages/ArticlesPage'
import EditIcon from '@/shared/assets/icons/edit.svg'
import { RoutePath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { AppLink } from '@/shared/ui/AppLink'
import { Button } from '@/shared/ui/Button'
import { Icon, IconColor } from '@/shared/ui/Icon'
import { Input, InputTheme } from '@/shared/ui/Input'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const dispatch = useDispatch()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const authData = useSelector(getUserAuthData)
    const search = useSelector(getArticlesPageSearch)
    const navigate = useNavigate()

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onChangeSearch = useCallback(
        (value: string) => {
            dispatch(articlePageActions.setPage(1))
            dispatch(articlePageActions.setSearch(value))
            debounceFetchData()
            navigate(RoutePath.articles)
        },
        [dispatch, debounceFetchData, navigate]
    )

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Input
                    round
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Search')}
                    theme={InputTheme.BASE}
                />
                <AppLink to={RoutePath.article_create} className={cls.writeBtn}>
                    <Icon Svg={EditIcon} color={IconColor.SECONDARY} />
                    <Text text={t('Write')} />
                </AppLink>
                <ThemeSwitcher />
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />

                    <AvatarDropdown />
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />

            <Button onClick={onOpenModal}>{t('Log in')}</Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    )
})
