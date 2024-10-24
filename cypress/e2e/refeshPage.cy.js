describe('pagerefres',()=>{

    it('page refresh', ()=>{

        cy.visit("https://www.amazon.com/gp/cart/view.html?ref_=nav_cart")
        cy.contains('Best Sellers').should('be.visible')
        cy.reload()
        cy.contains('Best Sellers').should('be.visible')
        cy.reload({timeout:5000})

        cy.window().then((data=>{

            data.location.reload()
        }))
    })
})