import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ErrorPage.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'


interface ErrorPageProps {
    className?: string
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Error occured')}</p>
            <Button onClick={reloadPage}>{t('Refresh page')}</Button>
        </div>
    )
}
