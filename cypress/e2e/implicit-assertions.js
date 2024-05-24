///<reference types="cypress"/>

//Неявные утверждения

describe('Testing Sofia metro', () => { //Сообщает название набора моих тестов
    it('Visit Sofia metro', () => {
        cy.visit("https://www.metrosofia.com/bg")
        cy.contains('EN').click()
    });

    it('Sofia Metro assertions examples', () => {
        cy.visit("https://www.metrosofia.com/en")
        cy.get('.control > .button').should('contain', 'Find Route')
        .should('have.class', 'button is-primary')
        .should('have.length', 1)
        .should('be.visible')
    });

    it('Sofia metro - find type', () => {
        cy.visit("https://www.metrosofia.com/en")
        cy.get('.control > .button').invoke('attr', 'type')
        .should('equal', 'submit')

    });

    it('Sofia metro - using and', () => {
        cy.visit("https://www.metrosofia.com/en")
        cy.get('.control > .button').invoke('attr', 'type')
        .and('equal', 'submit')
        
    });
    
});