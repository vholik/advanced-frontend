import './styles/index.scss'
import { Suspense, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

export const App = () => {
    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Sidebar />
                <Modal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false)
                    }}
                    // eslint-disable-next-line i18next/no-literal-string
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus odio iure asperiores perferendis iste aperiam
                    facilis earum ea repudiandae voluptatem ducimus eligendi non
                    voluptas excepturi, vel sequi maxime accusantium officiis
                    tempore nulla sed necessitatibus. Error in officiis aperiam
                    corrupti dolore voluptate quidem earum, omnis rem?
                    Consectetur, quaerat cumque? Natus, laborum.
                </Modal>
                <button
                    type="button"
                    onClick={() => {
                        setIsOpen(true)
                    }}
                    // eslint-disable-next-line i18next/no-literal-string
                >
                    toggle
                </button>
                <div className="content-page">
                    <Navbar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
