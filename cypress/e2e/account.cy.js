/* eslint-disable no-undef */
describe('Cypress google login and account page test', () => {
  it('should login to google successfully and account pages and their main elements should be visible', () => {
    cy.visit('/login');
    // google login
    cy.login();
    // if login was successful find the user account dashboard container
    cy.get('[data-cy="account-dashboard"]').should('be.visible');
    // Account side navigation is visible
    cy.get('[data-cy="account-navigation"]').should('be.visible');
    // Go to reservations and reservations container is visible
    cy.findByText(/reservations/i).click();
    cy.get('[data-cy="account-reservations"]').should('be.visible');
    // Go to profile and profile container and form are visible
    cy.findByText(/guest profile/i).click();
    cy.get('[data-cy="account-profile"]').should('be.visible');
    cy.get('[data-cy="account-profile-form"]').should('be.visible');
    // Sign out
    cy.findByText(/sign out/i).click();
    // Should be redirected to '/' and 'Guest Area' in navigation should be visible when there is not logged in user
    cy.url().should('eq', 'http://localhost:3000/');
    cy.findByRole('link', { name: /guest area/i }).should('be.visible');
  });
});
