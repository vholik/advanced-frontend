import { useEffect, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {
    profile: profileReducer,
}

// import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const result = dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>{t('Profile Page')}</div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
