import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { HStack, VStack } from 'shared/ui/Stack'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'

import { getProfileForm } from '../../model/selector/getProfileForm/getProfileForm'
import { getProfileReadonly } from '../../model/selector/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selector/getProfileData/getProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

import cls from './EditableProfileHeader.module.scss'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
    className,
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
