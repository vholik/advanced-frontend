import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Note } from 'shared/ui/Note/Note'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'

import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <Note>
                <Text align={TextAlign.CENTER} text={t('Article not found')} />
            </Note>
        )
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <CommentList comments={[]} />
        </div>
    )
}

export default memo(ArticleDetailsPage)
