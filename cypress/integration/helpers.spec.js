///<reference types="cypress"/>

describe('Helpers...', () => {
    it('wrap', () => {
        const obj = {nome: 'user', idade:'20'}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        /*cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona via cypress')
        })*/

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro numero'))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo numero'))

        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
    })
})