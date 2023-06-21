import { screen } from '@testing-library/react'

import AppRouter from './AppRouter'

import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/const/router'
import { componentRender } from '@/shared/lib/store/tests/componentRender/componentRender'

describe('AppRouter.test', () => {
    test('Page should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        })
        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/not-found-url-undefined',
        })
        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('Redirect to main page if route is auth', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                    },
                },
            },
        })
        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('Access is forbidden', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                    },
                },
            },
        })

        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })
})
