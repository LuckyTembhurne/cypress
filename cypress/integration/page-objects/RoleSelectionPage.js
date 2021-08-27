class RoleSelectionPage{
    
    usernameText(){ return cy.get('#role-text-large') }
    roleDropdown(){ return cy.get('[name="SelectARole"]')}
    submit(){ return cy.get('[data-ng-click="selectGroup();"]')}
}

export default RoleSelectionPage