import { useCallback, type FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Label } from 'shared/ui/Label/Label'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { Note } from 'shared/ui/Note/Note'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

import cls from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string
}

const intialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

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
        <DynamicModuleLoader reducers={intialReducers} removeAfterUnmount>
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
            </div>
        </DynamicModuleLoader>
    )
}

export default LoginForm
