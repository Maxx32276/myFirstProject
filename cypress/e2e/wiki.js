///<reference types="cypress"/>
import { wikiUrl } from "./urls"

it("Wikipedia", () => {
cy.visit(wikiUrl)
cy.get('#searchInput').click().type("Украина{enter}")

})