import { getByTestId } from 'cypress/support/commands/common'

let profileId: string

describe('empty spec', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then((data) => {
            cy.visit(`profile/${data.id}`)
            profileId = data.id
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('profile is succesfuly loading', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'test')
    })
    it('edit profile', () => {
        const firstname = 'first'

        const lastname = 'second'
        cy.updateProfile(firstname, lastname)
        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname)
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname)
    })
})
