/*Задание 7

1. Создайте самостоятельно блок describe и в нем блок it
2. Посетите сайт https://mui.com/material-ui/react-autocomplete/
3. Найдите кнопку для выбора фильма (Movie) по id при помощи селектор тула в Cypress
4. Впишите цифру 12
5. Система должна вам предложить фильм 12 Angry Men
*/

/// <reference types="cypress" />
import { muiUrl } from './urls.js';
describe('Autocomplete', () => {
    it('Autocomplete in site', () => {
        cy.visit(muiUrl)
        cy.get('#combo-box-demo').type('12')
    });
});
