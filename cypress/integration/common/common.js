import { defineStep } from "cypress-cucumber-preprocessor/steps"
import NavBar from '../page-objects/components/NavBar'
import QuoteHeader from '../page-objects/components/QuoteHeader'
import RoleSelectionPage from '../page-objects/RoleSelectionPage'
import OverviewTab from '../page-objects/IBM/OverviewTab'
import CustomerTab from '../page-objects/IBM/CustomerTab'
import ConfigurationTab from '../page-objects/ConfigurationTab'

const navBar = new NavBar()
const quoteHeader = new QuoteHeader()
const roleSelectionPage = new RoleSelectionPage()
const overviewTab = new OverviewTab()
const customerTab = new CustomerTab()
const configurationTab = new ConfigurationTab()
let mail = ''
let username = ''

defineStep('Login to {string} with user {string}', function (env_url, user) {
    mail = this.user_data.email
    username = user
    cy.IBMLogin(Cypress.env(env_url), mail, this.user_data.password)
    roleSelectionPage.usernameText().should('include.text', username)
})

defineStep('Select role {string}-{string}', function (geo, role) {
    roleSelectionPage.roleDropdown()
        .should('be.enabled')
        .select(this.roles_data.DEV.IBM[geo][role])
    roleSelectionPage.submit().click()
    navBar.roleText().should('include.text', this.roles_data.DEV.IBM[geo][role])
})

defineStep('Create a new quote', function () {
    navBar.createNewQuote()
    const quoteid = quoteHeader.quoteIDIBM()
    quoteid.should('have.length', 7)
})

defineStep('Verify quote status as {string}', function (expectedStatus) {
    quoteHeader.quoteStatus()
        .should('include.text',expectedStatus)
})

defineStep('Fill overview data with country {string}, title {string}, channel {string}, solution {string} and crad {string}', 
    function (country, title, channel, solution, crad) {
    
    overviewTab.country().select(country)
    overviewTab.phone().clear().type('12345678')
    overviewTab.quoteTitle().clear().type(title)
    overviewTab.oppID().clear().type(username)
    overviewTab.oppMail().clear().type(mail)
    overviewTab.oppName().clear().type(username)
    overviewTab.channelIndicator().select(channel)
    overviewTab.solutionType().select(solution)
    overviewTab.crad().clear().type(crad)
    overviewTab.saveAndContinue().click()
})

defineStep('Search and retreive IBM customer with name {string}', function (customer_name) {
    customerTab.searchCustomerButton().click()
    customerTab.customerNameInput().clear({force: true}).type(customer_name, {force: true})
    customerTab.searchCustomer().click({force: true})
    customerTab.searchResultRadio()
        .eq(1)
        .click({force: true})
    customerTab.selectcustomerButton().click({force: true})

    const customer = quoteHeader.customerName()
    customer.should('have.length.above', 2)
    customerTab.saveAndContinue()
            .should('be.visible')
            .scrollIntoView()
            .click()
})

defineStep('Add {string} {string}-{string} manual component with quantity {string}', function (componenttype, type, model, quantity) {
    configurationTab.addManualComponent().click()
    configurationTab.componentType().select(componenttype, {force: true})
    configurationTab.typeInput()
        .clear({force: true})
        .type(type, {force: true})
   configurationTab.modelInput()
        .clear({force: true})
        .type(model, {force: true})
    configurationTab.manualComponentQuantity()
        .clear({force: true})
        .type(quantity, {force: true})
    configurationTab.addAndClose()
        .click({force: true})
})

defineStep('Perform collect pricing', function () {
    configurationTab.collectPricing().click()
    let collection_date = configurationTab.priceCollectionDate()
    collection_date.should('have.length.above',5)
    configurationTab.saveAndContinue().click()
})

