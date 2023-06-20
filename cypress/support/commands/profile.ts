import { User } from '../../../src/entities/User/model/type/user'
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage'

export const updateProfile = (firstname?: string, lastname?: string) => {
    cy.getByTestId('EditableProfileHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname')
        .clear()
        .type(firstname || 'firstname')
    cy.getByTestId('ProfileCard.lastname')
        .clear()
        .type(lastname || 'lastname')
    cy.getByTestId('EditableProfileHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'fdfdf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 45,
            currency: 'EUR',
            country: 'Russia',
            city: 'Moscow',
            username: 'hello',
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))

        return body
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname?: string,
                lastname?: string,
            ): Chainable<User>
            resetProfile(testId: string): Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}
