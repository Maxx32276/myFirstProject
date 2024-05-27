///<reference types="cypress"/>
import { metroUrl } from "./urls";

describe('Testing Sofia metro', () => {
    beforeEach(function(){
        cy.visit(metroUrl) 
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