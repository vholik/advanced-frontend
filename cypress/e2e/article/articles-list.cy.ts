describe('ArticlesList', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles')
        })
    })
    it('succesfuly loaded list', () => {
        cy.intercept('GET', '**/articles?*', {
            fixture: 'article-details.json',
        })
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})
