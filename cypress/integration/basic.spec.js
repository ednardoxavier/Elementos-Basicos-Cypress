///<reference types="cypress"/>


describe('Cypress basics', () => {
    it.only('Visitar uma pagina e validar o titulo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        cy.title().should(title => {
            console.log(title)
        })
    })

    it('Encontrar e interagir com um elemento', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})