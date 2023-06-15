import { type FC, useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import cls from './EditableProfileHeader.module.scss'
import { getProfileData } from '../../model/selector/getProfileData/getProfileData'
import { getProfileForm } from '../../model/selector/getProfileForm/getProfileForm'
import { getProfileReadonly } from '../../model/selector/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface ProfilePageHeaderProps {
    className?: string
    isLoading?: boolean
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
    className,
    isLoading,
}) => {
    const { t } = useTranslation()
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id
    const avatar = useSelector(getProfileForm)?.avatar

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    if (isLoading) {
        return null
    }

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.bg}></div>
            <div className={cls.ProfilePageHeader}>
                <HStack gap="16" align="center">
                    {avatar && <Avatar src={avatar} className={cls.avatar} />}
                    <VStack gap="4" className={cls.heading}>
                        <Text title={t('Profile')} />
                        <Text
                            className={cls.subtitle}
                            text={t('Update your photo and personal details.')}
                        />
                    </VStack>
                </HStack>
                {canEdit && (
                    <div className={cls.btnsWrapper}>
                        {readonly ? (
                            <Button
                                onClick={onEdit}
                                size={ButtonSize.SM}
                                data-testid="EditableProfileHeader.EditButton"
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    onClick={onCancelEdit}
                                    theme={ThemeButton.OUTLINE}
                                    size={ButtonSize.SM}
                                    data-testid="EditableProfileHeader.CancelButton"
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    data-testid="EditableProfileHeader.SaveButton"
                                    onClick={onSave}
                                    size={ButtonSize.SM}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
