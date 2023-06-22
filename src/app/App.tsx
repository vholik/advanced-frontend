import { Suspense, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { AppRouter } from './providers/router'

import { getUserInited, userActions } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export const App = () => {
    const inited = useSelector(getUserInited)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
