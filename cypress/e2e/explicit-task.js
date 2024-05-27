/*Задание 3

1. Посетите сайт https://developer.mozilla.org/en-US/docs/Web/JavaScript
2. Найдите кнопку выбора языка по id
3. Используя метод .then и внутри него метод .contains, покажите, что кнопка выбора языка содержит слово English
(Подсказка - создаем функцию)
4. Создайте новый тест в рамках нашего describe блока
5. Вновь посетите сайт https://developer.mozilla.org/en-US/docs/Web/JavaScript
6. Найдите класс a11y-nav
7. По цепочке, при помощи команды .find, найдите элемент li 
8. По цепочке, используя команду .should, напишите функцию, сообщающую, что количество (длинна) li должно быть 3 
(Подсказка - нужно использовать явное утверждение)
*/
/// <reference types="cypress" />
import { developerUrl } from "./urls";

describe("Testing JavaScript MDN", () => {
  it("JavaScript MDN explicit assertions", () => {
    cy.visit(developerUrl)
    cy.get('#languages-switcher-button > .button-wrap').then((language) => {
      const btn = language.text()
      expect(btn).to.contain('English')
    })
  });

  it("JavaScript MDN explicit assertions", () => {
    cy.visit(developerUrl)
    cy.get('.a11y-nav')
    .find('li')
    .should((li) => {
      expect(li).to.have.lengthOf(3)
    })
  });
});
