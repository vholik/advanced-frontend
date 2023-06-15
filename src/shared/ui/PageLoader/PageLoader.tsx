import { type FC } from 'react'


import cls from './PageLoader.module.scss'
import { Loader } from '../Loader/Loader'


import { classNames } from '@/shared/lib/classNames/classNames'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
