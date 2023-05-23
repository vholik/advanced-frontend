import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'

export const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Sidebar />

                <div className="content-page">
                    <Navbar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
