import { type ReactNode, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Note.module.scss'

interface NoteProps {
    className?: string
    children?: ReactNode
}

export const Note: FC<NoteProps> = ({ className, children }) => {
    return (
        <div className={classNames(cls.Note, {}, [className])}>{children}</div>
    )
}
