///<reference types="cypress"/>

it("Wikipedia", () => {
cy.visit("https://ru.wikipedia.org")
cy.get('#searchInput').click().type("Украина{enter}")

})