class CustomerTab{

    searchCustomerButton(){ 
        return cy.get('[data-ng-click="showPopupSearch();scrollbaroverlay()"]')
    }

    customerNameInput(){
        return cy.get('.ngdialog-content')
                    .find('[data-ng-model="form.companyname1"]')
    }
    
    searchCustomer(){
        return cy.get('[data-ng-click="searchCustomer();"]')
    }

    searchResultRadio(){
        return cy.get('[data-ng-model="ccmsnb"]')
    }

    selectcustomerButton(){
        return cy.get('[data-ng-click="selectCustomer();"]')
    }

    saveAndContinue(){
        return cy.get('[data-ng-click="validateSave();"]')
    }
}

export default CustomerTab