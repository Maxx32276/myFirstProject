/*Задание 2

1. Посетите сайт https://developer.mozilla.org/en-US/docs/Web/JavaScript
2. Найдите на странице слово English при помощи contains и нажмите на него
3. В отдельном тесте посетите https://developer.mozilla.org/en-US/docs/Web/JavaScript снова
4. Найдите кнопку выбора языка по id.
5. Используйте команду should чтобы показать, что кнопка выбора языка содержит слово English
6. Создайте еще 1 тест, третий в данном наборе тестов.
7. Вновь посетите https://developer.mozilla.org/en-US/docs/Web/JavaScript
8. Найдите класс a11y-nav
9. По цепочке найдите элемент li 
10. По цепочке напишите команду, сообщающую, что количество (длинна) li должно быть 3
11. По цепочке, используйте команду and, сообщающую, что класс a11y-nav НЕ должен быть нерабочим
*/

/// <reference types="cypress" />

describe("Testing JavaScript MDN", () => {
  it("Visit JavaScript MDN", () => {
    cy.visit("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    cy.contains('English').click()
  });

  it("JavaScript MDN assertions", () => {
    cy.visit("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    cy.get('#languages-switcher-button > .button-wrap').should('contain', 'English')

  });
  it('Class button', () => {
    cy.visit("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    cy.get('.a11y-nav').should('exist')
    .find('li')
    .should('have.length', 3)
    .and('not.have.class', 'disabled')

  });

});
