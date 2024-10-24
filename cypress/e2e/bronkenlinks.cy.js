describe('brokenLink test Suite',()=>{

    it('verify navigation across pages',()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        let Brokenlinks = 0
        let Activelinks = 0
        cy.get('a').each(($link, index) =>{
            const href = $link.attr('href')
            if(href){
                cy.request({url:href , failOnStatusCode: false}).then((response) =>{
                    if (response.status >=400){

                        cy.log(`The url/link ${index+1} available is Broken link path: ${href}`)
                        Brokenlinks++
                    }
                    else {

                        cy.log(`Link ${index + 1} is a Active and path is: ${href}`)
                        Activelinks++

                    }
                })
            }

        }) .then(($links)=>{

            const totallinks = $links.length
            cy.log(`total links count: ${totallinks}`)
            cy.log(`total active links count: ${Activelinks}`)
            cy.log(`total inactive links count : ${Brokenlinks}`)

        })

        
    })
})
