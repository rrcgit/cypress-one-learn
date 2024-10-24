describe('Test Automation -CypressViewport', () =>{

    it('viewport Test1',()=>{

        //cy.viewport(990,760)
        cy.visit('https://www.amazon.com/')

    })
    it('viewport Test2',()=>{

        //cy.viewport('iphone-3')
        cy.visit('https://www.amazon.com/')

    })
    it('viewport Test3',()=>{

        //cy.viewport('iphone-3', 'landscape')
        cy.visit('https://www.amazon.com/')

    })
})