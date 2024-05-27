///<reference types="cypress"/>
import { metroUrl } from "./urls";

//Неявные утверждения

describe('Testing Sofia metro', () => { //Сообщает название набора моих тестов
    it('Visit Sofia metro', () => {
        cy.visit(metroUrl)
        cy.contains('EN').click()
    });

    it('Sofia Metro assertions examples', () => {
        cy.visit(metroUrl)
        cy.get('.control > .button').should('contain', 'Find Route')
        .should('have.class', 'button is-primary')
        .should('have.length', 1)
        .should('be.visible')
    });

    it('Sofia metro - find type', () => {
        cy.visit(metroUrl)
        cy.get('.control > .button').invoke('attr', 'type')
        .should('equal', 'submit')

    });

    it('Sofia metro - using and', () => {
        cy.visit(metroUrl)
        cy.get('.control > .button').invoke('attr', 'type')
        .and('equal', 'submit')
        
    });
    
});