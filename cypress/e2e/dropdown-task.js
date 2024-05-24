/*Задание 5

1. Посетите сайт https://www.ibm.com/docs/en/zos/2.2.0?topic=instances-select-categories-page
2. Найдите кнопку выбора версии (Change version) по id при помощи селектор тула в Cypress
3. Используя команду select(), выберете версию 3.1.0.
*/
/// <reference types="cypress" />
describe("Dropdown", () => {
  it("Dropdown lists", () => {
    cy.visit('https://www.ibm.com/docs/en/zos/2.2.0?topic=instances-select-categories-page');
    cy.get('#toc-version-selector').select('3.1.0')
  });
});
