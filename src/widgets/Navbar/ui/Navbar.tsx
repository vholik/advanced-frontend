import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { memo, useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Input, InputTheme } from 'shared/ui/Input/Input'
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { getArticlesPageSearch } from 'pages/ArticlesPage/model/selectors/articlesPageSelector'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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

    const onLogout = () => {
        dispatch(userActions.logout())
    }

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
                <ThemeSwitcher className={cls.langSwitcher} />
                <Button onClick={onLogout}>{t('Log out')}</Button>
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
