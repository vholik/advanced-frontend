import { Suspense } from 'react'

import { type Story } from '@storybook/react'

import '@/app/styles/index.scss'

import { I18nextProvider } from 'react-i18next'

import i18n from '../../i18n/i18n'

export const TranslationDecorator = (Component: Story) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback="">
                <Component />
            </Suspense>
        </I18nextProvider>
    )
}
