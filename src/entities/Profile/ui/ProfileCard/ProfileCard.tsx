import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import { getProfileIsLoading } from '../../model/selector/getProfileIsLoading/getProfileIsLoading'
import { getProfileData } from '../../model/selector/getProfileData/getProfileFirstName'
import { getProfileError } from '../../model/selector/getProfileError/getProfileError'

import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    const { t } = useTranslation('profile')

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button className={cls.editBtn}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    )
}
