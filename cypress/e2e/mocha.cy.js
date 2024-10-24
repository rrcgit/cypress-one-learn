afterEach(function(){
    cy.log("---Aftereach Test --- for Both")
})

beforeEach(function() {

    cy.log('---beforeTest----')
})

describe('Test Suite1', () => {
    it('Test Suite1 - TC1', () =>{

        cy.log(" --- TestSuite --- TC1 ----");
        
    });
    it('Test Suite1 - TC2', () =>{

        cy.log(" --- TestSuite --- TC2 ----");
        
    });

});
describe('Test Suite2', () => {

    it('Test Suite2 - TC1', () =>{

        cy.log(" --- TestSuite --- TC1 ----");
        
    });
    it('Test Suite2 - TC2', () =>{

        cy.log(" --- TestSuite --- TC2 ----");
        
    });

});
