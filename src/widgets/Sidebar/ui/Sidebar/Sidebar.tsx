import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import MainIcon from 'shared/assets/icons/home.svg'
import InfoIcon from 'shared/assets/icons/info.svg'

import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ThemeButton.OUTLINE}
                type="button"
                square
                size={ButtonSize.XL}
                onClick={onToggle}
                className={cls.collapsedBtn}
                data-testid="toggle-button"
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cls.links}>
                <AppLink to={RoutePath.main} className={cls.mainLink}>
                    <MainIcon />
                    <span className={cls.linkInner}>{t('Main')}</span>
                </AppLink>
                <AppLink to={RoutePath.about} className={cls.mainLink}>
                    <InfoIcon />
                    <span className={cls.linkInner}>{t('About')}</span>
                </AppLink>
            </div>
            <LangSwitcher collapsed={collapsed} />
        </div>
    )
}
