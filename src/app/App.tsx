import { Suspense, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from '@/entities/User'

import { AppRouter } from './providers/router'

export const App = () => {
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

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
