import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BugButton } from '@/app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation()

    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }

    return (
        <>
            {t('Main page')}
            <BugButton />
        </>
    )
}

export default MainPage
