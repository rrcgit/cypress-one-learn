describe('Read and Write a file', ()=>{

    it('Write toa file',()=>{
        cy.writeFile("FirstFile.txt", "Name : Raghava \n")
        cy.writeFile("FirstFile.txt", "Javascript: Cypress ", {flag:"a+"})

        cy.writeFile("newFile.json", {data1: "one", data2: "two"}, {flag:"a+"})

        cy.writeFile("cypress/fixtures/newfile2.json", {data3: "three", data4: "four"})

    })

    it('Read File', ()=>{

        cy.readFile("FirstFile.txt").then((data) =>{
            cy.log("print", data);
            
        })


    })


})