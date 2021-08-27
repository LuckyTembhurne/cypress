// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


//Mocha Hooks
beforeEach(function(){    // arrow function should be avoided here
    cy.fixture('profile').then((user_data)=>{ 
      this.user_data = user_data  //creating user_data variable using this keyword so that we can use user_data in all testcases
    })
    cy.fixture('roles').then((roles_data)=>{
      this.roles_data = roles_data
    })
    cy.fixture('misc').then((misc_data)=>{
      this.misc_data = misc_data
    })
  })

  
// Alternatively you can use CommonJS syntax:
// require('./commands')
