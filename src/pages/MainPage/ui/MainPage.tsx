import { BugButton } from 'app/providers/ErrorBoundary'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
