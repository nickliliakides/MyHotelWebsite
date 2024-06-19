/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Cypress.Commands.add('login', () => {
  cy.intercept('/login', { fixture: 'session.json' }).as('session');

  // Set the cookie for cypress.
  // It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
  // This step can probably/hopefully be improved.
  cy.setCookie(
    'authjs.session-token',
    'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoib1BlTjVHTGtaTmliZHNkc2x1RlJBaC1ybGIxR19wdzJjNUFrWXJ1OHhRd0FSNnZXNHdCYU1aUjI4ekhWaXdNbjJ6Qk9OVkdqLTBkQld6cXhYUk55b3cifQ..OEJ8KAT8uSJt9zLu9Z9y6A.TRbdKHScSHnN4vKWsUXxpI_j92dcIv2eYCjTYYxXoYyRoDBdeynX1rB8y_YNu3cKw87BT1nN3_o03ULKI3kUNPjCGTc3rnuEdkVyjRFm_EvTe96kaarcpcY5ypP24UHawmZwkZT-wbBPaFeuMDR2yYyu68z0QJmv_mJhXAXcaKspA9BxAO5yDMB53dtTTRTFt_ObPwfnyVb7uM2j8KQTP-T-BwlCo6NJTNY20VbADYeBMOZMIDdQQ7lwR65dYLRdNNyHorZxUNfByLye_CM-GE-gEdKg7drm_HrtmoUj44CzgEpjG21yZF15Hmg9QyGglvQFzsn4pSB2_eWG_Q4769SfThRd9PsirwKrrwUBGNFYvix2qpwdLE7LBHG9UIlnaghzQjkr-2RIRgPLJEZbRg.nWVkFEl3ZdOqUje98zLR6KT0087UlML96ldvpcwzWl8'
  );
  cy.visit('/account');
});
