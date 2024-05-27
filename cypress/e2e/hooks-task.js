/*Задание 4

1. Создайте хук beforeEach
2. Посетите сайт https://developer.mozilla.org/en-US/docs/Web/JavaScript
3. Создайте 2 теста в блоке describe
4. Содержание первого теста должно быть таким cy.contains("English").click();
5. Во втором тесте найдите кнопку выбора языка по id при помощи селектор тула в Cypress
6. По цепочке добавьте команду .should, в рамках которой сообщите, что кнопка выбора языка должна иметь текст English. 
(Подсказка - в этом случае должен быть полный текст, а не его часть)
7. После второго теста создайте хук afterEach и в теле его функции впишите команду, которая почистит куки после каждого теста
*/
/// <reference types="cypress" />
import { developerUrl } from "./urls";

describe("Testing JavaScript MDN", () => {
  //beforeEach hook
  beforeEach(() => {
    cy.visit(developerUrl);
  })
  //   it
  it('Open local', () => {
    cy.contains("English").click();
  });
  //   it
  it('Find to Id', () => {
    cy.get('#languages-switcher-button > .button-wrap').should(
      'have.text',
      'English (US)'
    )
  });
  //afterEach hook
  afterEach(function(){
    cy.clearCookies()
  })
});
