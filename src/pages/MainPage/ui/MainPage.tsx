import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <>
            {t('Main page')}
            <Counter />
            <BugButton />
        </>
    )
}

export default MainPage
