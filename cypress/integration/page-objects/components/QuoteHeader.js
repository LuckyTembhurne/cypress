export default class QuoteHeader{

    quoteIDIBM(){
        return cy.contains('div[data-ng-show="currentQuote.showHeader"] > div:nth-of-type(2) > .col-md-3', /\d+/, { timeout: 10000 })
                 .invoke('text')
    }

    quoteStatus(){
        return cy.get('[data-ng-show="currentQuote.showHeader"] > :nth-child(1) > div.ng-scope > .text-center')
    }
    customerName(){
        return cy.contains('[data-ng-hide="currentQuote.quoteCustomer.newCustomertoIBMSection"]', /^[a-zA-Z ]*$/, { timeout: 15000 })
                .invoke('text')
    }
}