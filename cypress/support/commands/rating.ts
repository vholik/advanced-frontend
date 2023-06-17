import { User } from '../../../src/entities/User/model/type/user'

export const setRate = (starCount = 5, feedback = 'feedback') => {
    cy.getByTestId(`StarRating.${starCount}`).click()
    cy.getByTestId('RatingCard.Input').type(feedback)
    cy.getByTestId('RatingCard.SendButton').click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starCount?: number, feedback?: string): Chainable<User>
        }
    }
}
