describe('Shadow Dom test Suite',()=>{

    it("Shadow Dom Handling", () =>{

        cy.visit("https://selectorshub.com/xpath-practice-page/")
        cy.get('#pizza').type("Test Data Shadow Dom ID")
        // cy.get('#userName').shadow().find("#app2").shadow().find('#pizza').type("Test Data Shadow Dom ID")
    })
})