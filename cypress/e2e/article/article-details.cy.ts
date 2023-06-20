let currentArticleId: string

describe('User enters article details page', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })

    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    describe('Api', () => {
        it('Parsing article data', () => {
            cy.getByTestId('ArticleDetails.Info').should('exist')
        })
        it('Recommendation list visible', () => {
            cy.getByTestId('ArticleRecommendationsList').should('exist')
        })

        it.skip('Leave a comment', () => {
            cy.getByTestId('ArticleDetails.Info').should('exist')
            cy.getByTestId('AddCommentForm').scrollIntoView()
            cy.addComment('text')
            cy.getByTestId('CommentCard.Content').should('exist')
        })
    })
    describe('Api fixture', () => {
        it('Star rating', () => {
            cy.intercept('GET', '**/articles/*', {
                fixture: 'article-details.json',
            })
            cy.getByTestId('ArticleDetails.Info').should('exist')
            cy.getByTestId('RatingCard').scrollIntoView()
            cy.setRate(5, 'feedback')
            cy.get('[data-selected="true"]').should('have.length', 5)
        })
    })
})
