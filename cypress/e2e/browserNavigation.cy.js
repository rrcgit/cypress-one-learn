describe('browsernavigation test suite', () =>{

    it('Testcase1', () =>{

        cy.visit("https://naveenautomationlabs.com/opencart/")
        // cy.get('div>ul>li>a').contains('Software').click()
        cy.contains('Software').click()
        cy.contains('There are no products to list in this category.').should('be.visible')
        cy.go('back')
        cy.go('forward')
        cy.contains('There are no products to list in this category.').should('be.visible')
        cy.go(-1)


    })
})