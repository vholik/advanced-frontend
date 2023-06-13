import { useEffect, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import cls from './ProfilePage.module.scss'

import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { isNumeric } from '@/shared/lib/isNumeric/isNumeric'
import { type Currency } from '@/entities/Currency'
import { type Country } from '@/entities/Country'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Note } from '@/shared/ui/Note/Note'
import {
    ValidateProfileError,
    EditableProfileCard,
    ProfilePageHeader,
} from '@/features/editableProfileCard'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from '@/widgets/Page/Page'
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'


interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()

    if (!id) {
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
        <Page className={cls.ProfilePage}>
            <div className={cls.inner}>
                <EditableProfileCard id={id} />
            </div>
        </Page>
    )
}

export default ProfilePage
