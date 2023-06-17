import { type FC } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import cls from './ProfilePage.module.scss'

import { EditableProfileCard } from '@/features/editableProfileCard'
import { Note } from '@/shared/ui/Note'
import { Page } from '@/widgets/Page'

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
        <Page data-testid="ProfilePage" className={cls.ProfilePage}>
            <div className={cls.inner}>
                <EditableProfileCard id={id} />
            </div>
        </Page>
    )
}

export default ProfilePage
