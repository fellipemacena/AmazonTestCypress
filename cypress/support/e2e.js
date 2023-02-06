import './commands'
import "cypress-cucumber-attach-screenshots-to-failed-steps";
import "cypress-xpath";



Cypress.on('uncaught:exception', (err) => {
    return false;
  });