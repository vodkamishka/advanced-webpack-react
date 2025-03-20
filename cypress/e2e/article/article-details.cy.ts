let currentArticle;

describe('Пользователь заходит на страницу статьи', () => {

    beforeEach(() => {
        cy.login().then(data => {
            cy.createArticle().then(article => {
                currentArticle = article.id;
                cy.visit(`articles/${article.id}`);
            });
        })
    })

    afterEach(() => {
        cy.removeArticle(currentArticle);
    })

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    })

    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

})