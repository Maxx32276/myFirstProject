///<reference types="cypress"/>

//Явные утверждения

it('Sofia metro', () => {
    cy.visit("https://www.metrosofia.com/en")
    cy.get('.control > .button').should(param1 => {
    expect(param1).to.have.lengthOf(1)
    })
    //cy.screenshot()

});