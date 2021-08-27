class OverviewTab{

    country(){ return  cy.get('[data-ng-model="currentQuote.overViewData.country"]') }
    phone(){ return  cy.get('[data-ng-model="currentQuote.overViewData.requesterPhone"]') }
    quoteTitle(){ return  cy.get('[data-ng-model="currentQuote.overViewData.quoteTitle"]') }
    oppID(){ return  cy.get('[data-ng-model="currentQuote.overViewData.opportunityId"]') }
    oppMail(){ return  cy.get('[data-ng-model="currentQuote.overViewData.oppEmail"]') }
    oppName(){ return  cy.get('[data-ng-model="currentQuote.overViewData.oppName"]') }
    channelIndicator(){ return  cy.get('[data-ng-model="currentQuote.overViewData.channelIndicator"]') }
    solutionType(){ return  cy.get('[data-ng-model="currentQuote.overViewData.solutionType"]') }
    crad(){ return  cy.get('[data-ng-model="currentQuote.overViewData.crad"]') }
    
    saveAndContinue(){ return   cy.get('[data-ng-click="saveQuoteOverview(\'\')"]') }

}

export default OverviewTab