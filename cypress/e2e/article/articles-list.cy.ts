describe('ArticlesList', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles')
        })
    })
    it('succesfuly loaded list', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})
