///<reference types="cypress"/>

describe('Trabalhar com elementos basicos', () =>{
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    beforeEach(() => {
        cy.reload()
    })    
    })

    it.only('Validar um texto na pagina', () =>{
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        
    })
    it('Clicar em um link e validar um o texto', () =>{
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('not.have.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Campos de texto', () => {
        cy.get('#formNome').type('Cypress teste')   
        cy.get('#formNome').should('have.value', 'Cypress teste')

        cy.get('#elementosForm\\:sugestoes')
            .type('Hello cypress teste')
            .should('have.value', 'Hello cypress teste')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Teste terra')
            .should('have.value', 'Teste terra')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{Backspace}{Backspace}')
            .should('have.value', 'Teste123')    

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay: 100})
            .should('have.value', 'acerto')
    })

    it('Clicar e validar um Button', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name=formSexo]").should('have.length', 2)
        
    })

    it('Clicar e validar um Checkbox', () => {
        
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaCarne').should('be.checked')
        cy.get('#formComidaPizza').should('not.be.checked')

    })

    it('Selecionar e Validar um ComboBox', () => {

        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')

        cy.get('[data-test=dataEscolaridade]')
            .select('2graucomp')
            .should('have.value', '2graucomp')   
        
    })

    it('Selecionar Combo Multiplo', () => {

        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])

    })
})