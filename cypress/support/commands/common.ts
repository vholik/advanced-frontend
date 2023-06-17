import { selectByTestId } from 'cypress/e2e/helpers/selectByTestId'

import { User } from '../../../src/entities/User/model/type/user'
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage'

export const login = (username = 'test', password = '123') => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))

        return body
    })
}

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId))
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
            getByTestId(testId: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}
