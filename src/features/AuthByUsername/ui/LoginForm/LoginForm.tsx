import { useCallback, type FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './LoginForm.module.scss'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { Label } from '@/shared/ui/Label'
import { Note } from '@/shared/ui/Note'
import { Text } from '@/shared/ui/Text'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const intialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess, password, username])

    return (
        <DynamicModuleLoader
            reducers={intialReducers}
            removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Login to your account')} />
                <Text
                    className={cls.subtitle}
                    text={t('Enter your credentials to access your account')}
                />
                {error && (
                    <Note className={cls.error}>
                        {t('You entered an incorrect username or password')}
                    </Note>
                )}
                <Label
                    value="Your username"
                    className={cls.label}>
                    <Input
                        type="text"
                        onChange={onChangeUsername}
                        value={username}
                    />
                </Label>
                <Label
                    value="Password"
                    className={cls.label}>
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
                    disabled={isLoading}>
                    {t('Log in')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default LoginForm
