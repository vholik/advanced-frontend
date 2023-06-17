import { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation()

    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage)}
        >
            {t('Page not found')}
        </Page>
    )
}
