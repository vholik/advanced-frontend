import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Label } from 'shared/ui/Label/Label'

import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h2 className={cls.title}>{t('Login to your account')}</h2>
            <p className={cls.subtitle}>
                {t('Enter your credentials to access your account')}
            </p>
            <Label value="Your username" className={cls.label}>
                <Input type="text" />
            </Label>
            <Label value="Password" className={cls.label}>
                <Input type="text" />
            </Label>
            <Button className={cls.loginBtn} theme={ThemeButton.STRETCH}>
                {t('Log in')}
            </Button>
        </div>
    )
}
