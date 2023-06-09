import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { ProfileCard } from 'entities/Profile'
import { isNumeric } from 'shared/lib/isNumeric/isNumeric'
import { Loader } from 'shared/ui/Loader/Loader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Note } from 'shared/ui/Note/Note'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'

import { ValidateProfileError } from '../../model/consts/consts'
import { getProfileForm } from '../../model/selector/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selector/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selector/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selector/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfilePageHeader } from '../EditableProfileHeader/EditableProfileHeader'

interface EditableProfileCardProps {
    className?: string
    id?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
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
            <div className={classNames('', {})}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <>
                <Note>
                    {t(
                        'Error occured while loading profile. Try to refresh your page.'
                    )}
                </Note>
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {Boolean(validateErrors?.length) &&
                    validateErrors?.map((err) => (
                        <Note data-testid="EditableProfileCard.Error" key={err}>
                            <Text
                                text={validateErrorTranslates[err]}
                                theme={TextTheme.ERROR}
                                align={TextAlign.CENTER}
                            />
                        </Note>
                    ))}
                <ProfilePageHeader />
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
