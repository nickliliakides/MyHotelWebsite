/* eslint-disable no-undef */
describe('Static routes E2E tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('All routes display correct titles, headings and all crucial elements are visible', () => {
    // home page/route
    cy.title().should('contain', 'MyHotel');
    cy.get('h1').should('be.visible');
    cy.findByRole('link', { name: /book a room/i }).click();
    // rooms page/route
    cy.title().should('contain', 'MyHotel - Rooms');
    cy.get('h1').should('be.visible');
    cy.findByRole('heading', { name: /our luxury rooms and studios/i }).should(
      'exist'
    );
    cy.get('[data-cy="room-filters"]').should('be.visible');
    // about page/route
    cy.findByRole('link', { name: /about/i }).click();
    cy.title().should('contain', 'MyHotel - About');
    cy.get('h1').should('be.visible');
    cy.findByRole('heading', { name: /welcome to myhotel/i }).should('exist');
    cy.findByRole('heading', {
      name: /managed by our family since 1962/i,
    }).should('exist');
    cy.findByRole('img', { name: /london bridge image/i }).should('exist');
    cy.findByRole('img', { name: /retro picture of myhotel/i }).should('exist');
  });
});
