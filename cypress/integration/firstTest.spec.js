/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Inayati Machsus Izza Addin')
        cy.get('[placeholder ="Email"][type="text"]').type('inayatimachsus@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('inayatimachsus@gmail.com')
        cy.get('#inputPassword2').type('inayati')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('inayatimachsus@gmail.com')
        cy.get('#exampleInputPassword1').type('inayati')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Inayati Machsus Izza Addin')
        cy.get('[placeholder="Subject"]').type('Tugas PPL Cypress')
        cy.get('[placeholder="Message"').type('Mengerjakan Project Cypress')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Inayati')
        cy.get('#inputLastName').type('Machsus')
        cy.get('#inputEmail').type('inayatimachsus@gmail.com')
        cy.get('#inputWebsite').type('www.wikipedia.org')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('inayatimachsus@gmail.com')
        cy.get('#inputPassword3').type('inayati')
        cy.get('.custom-checkbox').last().click()
    })

});