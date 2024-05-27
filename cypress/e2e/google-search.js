/*Задание 1

1. Посетите сайт https://www.google.bg/
2. Нажмите на поле поиска
3. Введите слово Волк
4. Нажмите на кнопку Поиск в Google, используя при этом { force: true }*/

/// <reference types="cypress" />
import { googleUrl } from "./urls";

it("Google with VPN", () => {
    cy.visit(googleUrl);
    cy.get('#W0wltc > .QS5gu').click();
    cy.get('#APjFqb').click().type("Волк");
    cy.get('.FPdoLc > center > .gNO89b').click({force: true});

});
