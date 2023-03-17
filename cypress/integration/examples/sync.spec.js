///<reference types="cypress"/>

describe('Sincronismo de elementos', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    beforeEach(() => {
        cy.reload()
    })    
    })

    it('Deve aguardar elemento estar disponivel', () => {

        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })

    it('Deve fazer retrys', () => {

        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
    })

    
    
    it('Uso do find', () => {

        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })


    it('Uso do Timeout', () => {

        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        // cy.wait(5000)
        // cy.get('#lista li')
        //     .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { timeout: 30000 })
            .should('have.length', 2)
            
    })

    it('retry', () => {

        cy.get('#buttonCount').click()
            .should('have.value', '11')
    })

    it.only('Should vs Then', () => {

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            //.should('have.length', 1)
            console.log($el)
            expect($el).to.have.length(1)
            return 2
        })
            .and('eq', 2)
            .and('not.have.id', 'buttonListDOM')

    })
})