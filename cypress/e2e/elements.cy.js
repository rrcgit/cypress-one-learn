describe('Cypress Examples', () =>{

    it('DOM Commands in cypress', () =>{
        cy.visit("https://naveenautomationlabs.com/opencart/")
        // cy.get('.image').first().click()
        // cy.get('.image').last().click()
        // cy.get('.image').eq(1).click()
        // cy.contains('MacBook').click()
        // cy.get('div').find('>a>img[alt="MacBook"]').click()
        // cy.get('div>a>img[alt="MacBook"]').click()
        cy.get('div>a>').filter('img[alt="MacBook"]').click()


    })



})