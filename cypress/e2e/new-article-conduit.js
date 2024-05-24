/// <reference types="cypress" />

describe("New article test", () => {
    beforeEach(() => {
        cy.visit("https://conduit.mate.academy/user/login")
      })
      afterEach(function(){
        // Проверка создания статьи
        cy.url().should('include', '/article/');
        cy.get('h1').should('contain', 'Title');
      })
      after(function(){
        //удаление статьи 
        cy.get('.article-actions > .article-meta > :nth-child(3) > .btn-outline-danger').click()
      })
    it("New article", () => {
        cy.get(':nth-child(1) > .form-control').type("test2@gmail.com")
        cy.get(':nth-child(2) > .form-control').type("Password1234!")
        cy.get('.btn').click()
        cy.get('.container > .nav > :nth-child(2) > .nav-link').should(
            'contain',
            'New Article'
        ).click()
        cy.get(':nth-child(1) > .form-control').should(
            'have.attr',
            'placeholder',
            'Article Title'
        ).type('Title')
        cy.get(':nth-child(2) > .form-control').should(
            'have.attr',
            'placeholder',
            "What's this article about?"
        ).type('About')
        cy.get(':nth-child(3) > .form-control').should(
            'have.attr',
            'placeholder',
            "Write your article (in markdown)"
        ).type('Test text')
        cy.get(':nth-child(4) > .form-control').should(
            'have.attr',
            'placeholder',
            "Enter tags").type('testTagMax')
        cy.contains('Publish Article').should('be.visible').click({ force: true })
    });  
});