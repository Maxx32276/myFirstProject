/*Задание 5

1. Посетите сайт https://www.marquette.edu/explore/choose-your-major/quiz.php
2. Найдите вариант Math по классу при помощи селектор тула в Cypress
3. Используя команду check(), выберете вариант Math.
*/
/// <reference types="cypress" />
import { marquetteUrl } from "./urls";
describe("Radio buttons", () => {
  it("Check radio button", () => {
    cy.visit(marquetteUrl);
    cy.get('#_pc_1').click();
    cy.get('.question1 > .copy > ul > :nth-child(3) > .form-control > input').check({force: true});

  });
});
