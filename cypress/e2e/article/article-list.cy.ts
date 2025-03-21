describe('Пользователь заходит на стрнаицу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should(
            'have.lengthOf.greaterThan',
            2,
        );
    });

    it('И статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should(
            'have.lengthOf.greaterThan',
            2,
        );
    });
});
