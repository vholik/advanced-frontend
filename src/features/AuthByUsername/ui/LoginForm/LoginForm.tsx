import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Label } from 'shared/ui/Label/Label'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

import cls from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { password, username, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Login to your account')} />
            <Text
                className={cls.subtitle}
                text={t('Enter your credentials to access your account')}
            />
            <Label value="Your username" className={cls.label}>
                <Input
                    type="text"
                    onChange={onChangeUsername}
                    value={username}
                />
            </Label>
            <Label value="Password" className={cls.label}>
                <Input
                    type="text"
                    onChange={onChangePassword}
                    value={password}
                />
            </Label>
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.STRETCH}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Log in')}
            </Button>

            {error && (
                <Text
                    text={t('You entered an incorrect username or password')}
                    theme={TextTheme.ERROR}
                />
            )}
        </div>
    )
}
