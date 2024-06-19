it('displays correct room name for room that existed at build time', () => {
  cy.visit('/rooms/293');
  cy.findByText('Room 001').should('exist');
});

it('displays correct error message for room that does not exist', () => {
  cy.visit('/rooms/12345');
  cy.findByText('This room could not be found :(').should('exist');
});
