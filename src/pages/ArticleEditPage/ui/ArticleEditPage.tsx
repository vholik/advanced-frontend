import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page/Page'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? 'Edit article' : 'Create article'}
        </Page>
    )
})

export default ArticleEditPage
