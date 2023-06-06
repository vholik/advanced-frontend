import { useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { getUserAuthData } from 'entities/User'
import { HStack, VStack } from 'shared/ui/Stack'

import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
    className?: string
    avatar?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
    className,
    avatar,
}) => {
    const { t } = useTranslation()
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

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
                            <Button onClick={onEdit} size={ButtonSize.SM}>
                                {t('Edit')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    onClick={onCancelEdit}
                                    theme={ThemeButton.OUTLINE}
                                    size={ButtonSize.SM}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button onClick={onSave} size={ButtonSize.SM}>
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
