import { classNames } from '@/shared/lib/classNames/classNames'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { memo, useCallback, useState } from 'react'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from '@/features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import { articlePageActions } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
import { getArticlesPageSearch } from '@/pages/ArticlesPage/model/selectors/articlesPageSelector'
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { useNavigate } from 'react-router-dom'
import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig'
import EditIcon from '@/shared/assets/icons/edit.svg'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { Icon, IconColor } from '@/shared/ui/Icon/Icon'
import { Text } from '@/shared/ui/Text/Text'
import { Dropdown, Popover } from '@/shared/ui/Popups'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { HStack } from '@/shared/ui/Stack'
import { NotificationList } from '@/entities/Notification'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

import cls from './Navbar.module.scss'

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
                    <Icon Icon={EditIcon} color={IconColor.SECONDARY} />
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
