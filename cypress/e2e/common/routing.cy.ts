import { selectByTestId } from '../helpers/selectByTestId'

describe('empty spec', () => {
    describe('User is NOT auth', () => {
        it('Main page visit', () => {
            cy.visit('/')
            cy.get(selectByTestId('MainPage')).should('exist')
        })
        it('Profile page visit', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('not.exist')
        })
        it('Not found page visit', () => {
            cy.visit('/blalbldjf')
            cy.get(selectByTestId('NotFoundPage')).should('exist')
        })
    })
    describe('User is auth', () => {
        it('profile page', () => {
            cy.login('admin', '123')
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('exist')
        })
        it('articles page enter', () => {
            cy.login('admin', '123')
            cy.visit('/articles')
            cy.get(selectByTestId('ArticlesPage')).should('exist')
        })
    })
})
