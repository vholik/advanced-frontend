import { useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from 'shared/ui/Avatar/Avatar'

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
                {avatar && <Avatar src={avatar} className={cls.avatar} />}
                <div className={cls.heading}>
                    <Text title={t('Profile')} />
                    <Text
                        className={cls.subtitle}
                        text={t('Update your photo and personal details.')}
                    />
                </div>

                {readonly ? (
                    <Button
                        className={cls.editBtn}
                        onClick={onEdit}
                        size={ButtonSize.SM}
                    >
                        {t('Edit')}
                    </Button>
                ) : (
                    <>
                        <Button
                            onClick={onCancelEdit}
                            className={cls.cancelBtn}
                            theme={ThemeButton.OUTLINE}
                            size={ButtonSize.SM}
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            onClick={onSave}
                            className={cls.saveBtn}
                            size={ButtonSize.SM}
                        >
                            {t('Save')}
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}
