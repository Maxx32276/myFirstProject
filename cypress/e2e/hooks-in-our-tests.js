///<reference types="cypress"/>

describe('Testing Sofia metro', () => {
    beforeEach(function(){
        cy.visit("https://www.metrosofia.com/en") 
    })
    it('Sofia Metro assertions examples', () => {
        cy.get('.control > .button').should('contain', 'Find Route')
        .should('have.class', 'button is-primary')
        .should('have.length', 1)
        .should('be.visible')
    });

    it('Sofia metro - find type', () => {
        cy.get('.control > .button').invoke('attr', 'type')
        .should('equal', 'submit')

    });
});