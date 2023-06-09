import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()

    return <div className={classNames('', {}, [className])}></div>
})

export default AdminPanelPage
