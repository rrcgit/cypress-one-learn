describe('dropdown functions', () =>{

    beforeEach( function() {

        cy.visit("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    })

    it('Handle dropdown select tag', () =>{
        // cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        // cy.get('#select-demo').select('Wednesday')
        cy.get('#select-demo').select(4).should('have.value', 'Wednesday')
        cy.get('#select-demo Option:selected').should('have.text', 'Wednesday')

    })

    it('Multi select test', () =>{
        cy.get('#multi-select').select(['Florida', 'New Jersey'])

    })

})

describe('dropdown new amazon', () =>{

    it('amazon test', () =>{
        cy.visit("https://www.amazon.com/")
        cy.get('#twotabsearchtextbox').type('iphone 16')
        // cy.get('.left-pane-results-container').find('>div').contains('iphone 16 pro max case').click()
        cy.get('.left-pane-results-container>div').contains('iphone 16 pro max case').click()


    })
})