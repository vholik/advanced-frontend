import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { RatingCard } from '@/entities/Rating'
import { Page } from '@/widgets/Page'

const MainPage = () => {
    const { t } = useTranslation()

    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }

    return (
        <Page data-testid="MainPage">
            {t('Main page')}
            <RatingCard
                title="How do you feel?"
                feedbackTitle="Leave your feedback"
                hasFeeback
            />
        </Page>
    )
}

export default MainPage
