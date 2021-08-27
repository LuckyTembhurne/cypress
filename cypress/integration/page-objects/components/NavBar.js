export default class NavBar{

    roleText(){ 
        return  cy.get('[title="Click return to PCS to change role"]')
    }

    createNewQuote(){
        return cy.get('[title="View available promotions and/or create a special bid request"]').click()
    }

}