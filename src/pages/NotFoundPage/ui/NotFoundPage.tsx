import { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

import cls from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.NotFoundPage)}>
            {t('Page not found')}
        </Page>
    )
}
