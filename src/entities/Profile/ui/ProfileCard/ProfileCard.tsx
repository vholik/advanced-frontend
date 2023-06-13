import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input/Input'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { type Country } from '@/entities/Country'
import { CountrySelect } from '@/entities/Country/ui/CountrySelect'
import { Label } from '@/shared/ui/Label/Label'

import { type Profile } from '../../model/types/profile'

import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    data?: Profile
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency: (value: Currency) => void
    onChangeCountry: (value: Country) => void
    readonly?: boolean
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props

    const { t } = useTranslation('profile')

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <div className={cls.row}>
                    <Label value={t('Your firstname')} />
                    <Input
                        onChange={onChangeFirstname}
                        value={data?.first}
                        placeholder={t('Your firstname')}
                        className={cls.input}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Your lastname')} />
                    <Input
                        onChange={onChangeLastname}
                        value={data?.lastname}
                        placeholder={t('Your lastname')}
                        className={cls.input}
                        readonly={readonly}
                        data-testid="ProfileCard.lastname"
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Your age')} />
                    <Input
                        onChange={onChangeAge}
                        value={String(data?.age)}
                        placeholder={t('Your age')}
                        className={cls.input}
                        readonly={readonly}
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Your city')} />
                    <Input
                        onChange={onChangeCity}
                        value={data?.city}
                        placeholder={t('Your city')}
                        className={cls.input}
                        readonly={readonly}
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Username')} />
                    <Input
                        onChange={onChangeUsername}
                        value={data?.username}
                        placeholder={t('Username')}
                        className={cls.input}
                        readonly={readonly}
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Avatar link')} />
                    <Input
                        onChange={onChangeAvatar}
                        value={data?.avatar}
                        placeholder={t('Avatar link')}
                        className={cls.input}
                        readonly={readonly}
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Currency')} />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                </div>
                <div className={cls.row}>
                    <Label value={t('Country')} />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </div>
            </div>
        </div>
    )
}
