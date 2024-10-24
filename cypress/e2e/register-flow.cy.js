describe('Registration page', ()=>{

    it('Enter the form details', ()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.get('#input-firstname').type('Raghav')
        cy.get('#input-lastname').type('QA')
        cy.get('#input-email').type('rrrcQQQA@email.com')
        cy.get('#input-telephone').type('5524586524')
        cy.get('#input-password').type('rrcQA@123')
        cy.get('#input-confirm').type('rrcQA@123')
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="checkbox"]').check()
        cy.get('.btn.btn-primary').click()


    })






})