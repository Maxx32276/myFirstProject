/*Задание 8

1. Создайте самостоятельно блок describe и в нем блок it
2. Посетите сайт https://register.rediff.com/register/register.php
3. Найдите кнопку Create my account по id и нажмите на нее
4. Используя команду cy.on, при помощи явного утверждения contains протестируйте, содержится ли во
всплывающем окне слово blank (Используйте метод window.alert())
5. * В рамках блока it, но после блока cy.on напишите команду, которая сделает скриншот теста.
*/
/// <reference types="cypress" />
describe('Alert', () => {
  it('Test', () => {
    cy.visit('https://register.rediff.com/register/register.php')
    cy.get('#Register.submitbtn').click()
  
  cy.on("window:alert", (alert) => {
  //Явное утверждение
  expect(alert).to.contains('blank');
  });

// Тут пишем команду, делающую скриншот
  cy.screenshot('test screen')
  });
});
