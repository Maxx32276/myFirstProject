///<reference types="cypress"/>

it("login test", function() {
    cy.visit("https://conduit.mate.academy/user/login")
    cy.get(':nth-child(1) > .form-control').type("test2@gmail.com")
    cy.get(':nth-child(2) > .form-control').type("Password1234!")
    cy.get('.btn').click()
     
    })