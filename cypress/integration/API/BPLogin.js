/// <reference types="Cypress" />

describe('My First API Test', function () {

    it('Mocking response', function () {

        //cy.visit("https://epricercdtmaintbp.w3-969.ibm.com/services/partners/epricer/v2/directLogin.do")

        const options = {
            method: 'POST',
            url: 'https://epricercdtmaintbp.w3-969.ibm.com/services/partners/epricer/v2/directLogin.do',
            body: {
                operation: 'verify',
                username: 'ltembh70@in.ibm.com',
                password: 'Welcome2ibmgabru'
            },
            form: true,
            failOnStatusCode: false,
            Headers: {
                referer: "https://prepiam.ice.ibmcloud.com/authsvc/mtfim/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:basicldapuser&Target=https%3A%2F%2Fprepiam.ice.ibmcloud.com%2Foidc%2Fendpoint%2Fdefault%2Fauthorize%3FqsId%3D4f8ea527-5fc0-44c9-8d6b-797b9a00fd63%26client_id%3DZmYzM2Q0MzEtYjk3Zi00"
            },
        }

        cy.request({
            method: 'POST',
            url: 'https://epricercdtmaintbp.w3-969.ibm.com/services/partners/epricer/v2/directLogin.do',
            body: {
                username: 'ltembh70@in.ibm.com',
                password: 'Welcome2ibmgabru',
            }
        }).then((res)=>{
            window.localStorage.setItem('jwt', res.body.us)
        })
        //cy.visit('https://prepiam.ice.ibmcloud.com/authsvc/mtfim/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:basicldapuser')

    })

    it('Mocking response', function () {
        cy.visit("https://epricercdtmaintbp.w3-969.ibm.com/services/partners/epricer/v2/directLogin.do", { failOnStatusCode: false })
       
     })
    //  it('Mocking response', function () {
    //  cy.get('#username').type('ltembh70@in.obm.com{enter}')
    //     cy.get('#password').type('Welcome2ibmgabru{enter}')
    // })
})