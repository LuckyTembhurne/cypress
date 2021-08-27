class CustomerTab{

    addManualComponent(){ 
        return cy.get('[data-ng-click="showConfigurationPopup(2);retrieveManualComponents();retrieveRevenueDivisionCode()"]')
    }

    componentType(){
        return cy.get('[data-ng-model="currentQuote.manageConfigData.internalManualComp.addManualType"]', { force: true }).scrollIntoView()
    }
    
    typeInput(){
        return cy.get('#type', { force: true })
    }

    modelInput(){
        return  cy.get('#model', { force: true })
    }

    manualComponentQuantity(){
        return cy.get('[data-ng-model="currentQuote.manageConfigData.internalManualComp.quantity"]', { force: true })
    }

    addAndClose(){
        return cy.get('[data-ng-click="addInternalManualComponent(true);"]', { force: true })
    }

    collectPricing(){
        return cy.get('[data-ng-click="collectPricing();"]')
    }

    priceCollectionDate(){
        return cy.contains('[data-ng-init="loopIndexproduct=$index; resizeConfigTable()"] td[headers="Collection date"]', /.+/, { timeout: 120000 })
            .invoke('text')
    }

    saveAndContinue(){
        return cy.get('[data-ng-click="showQuoteStep(quoteStepList[3]);"]')
    }
}

export default CustomerTab