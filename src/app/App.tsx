import { Suspense, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { AppRouter } from './providers/router'

import { getUserInited } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { initAuthData } from '@/entities/User/model/services/initAuthData'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Loader } from '@/shared/ui/Loader'

export const App = () => {
    const inited = useSelector(getUserInited)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!inited) {
        return <Loader />
    }

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Sidebar />

                <div className="content-page">
                    <Navbar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
