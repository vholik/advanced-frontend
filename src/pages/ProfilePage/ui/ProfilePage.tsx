import { useEffect, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions,
    profileReducer,
    ProfileCard,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { isNumeric } from 'shared/lib/isNumeric/isNumeric'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import { Note } from 'shared/ui/Note/Note'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import cls from './ProfilePage.module.scss'

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const { id } = useParams<{ id: string }>()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateError)
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.NO_DATA]: t('Please provide data'),
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }))
        },
        [dispatch]
    )

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }))
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }))
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (value: string) => {
            if (isNumeric(value)) {
                dispatch(
                    profileActions.updateProfile({ age: Number(value) || 0 })
                )
            }
        },
        [dispatch]
    )

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }))
        },
        [dispatch]
    )

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }))
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }))
        },
        [dispatch]
    )

    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value }))
        },
        [dispatch]
    )

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfilePage, { [cls.loading]: true })}
            >
                <Loader />
            </div>
        )
    }

    console.log(isLoading)

    if (error) {
        return (
            <div
                className={classNames(
                    cls.ProfileCard,
                    { [cls.loading]: true },
                    [className]
                )}
            >
                <Note>
                    {t(
                        'Error occured while loading profile. Try to refresh your page.'
                    )}
                </Note>
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.ProfilePage}>
                <ProfilePageHeader avatar={formData?.avatar} />
                {Boolean(validateErrors?.length) &&
                    validateErrors?.map((err) => (
                        <Note key={err}>{validateErrorTranslates[err]}</Note>
                    ))}
                <ProfileCard
                    data={formData}
                    onChangeLastname={onChangeLastname}
                    onChangeFirstname={onChangeFirstname}
                    readonly={readonly}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
