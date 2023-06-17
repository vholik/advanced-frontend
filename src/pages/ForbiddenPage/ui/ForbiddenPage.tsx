import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames('', {}, [className])}
        >
            {t('Access is forbidden')}
        </Page>
    )
})

export default ForbiddenPage
