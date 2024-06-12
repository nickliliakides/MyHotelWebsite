/* eslint-disable no-undef */
it("displays correct heading when navigating to '/rooms' route", () => {
  cy.visit("/");
  cy.findByRole("link", { name: /book a room/i}).click();
  cy.findByRole("heading", { name: /our luxury rooms and studios/i}).should('exist');
})

it("displays correct headings and images when navigating to '/about' route", () => {
  cy.visit("/");
  cy.findByRole("link", { name: /about/i}).click();
  cy.findByRole("heading", { name: /welcome to myhotel/i}).should('exist');
  cy.findByRole("heading", { name: /managed by our family since 1962/i}).should('exist');
  cy.findByRole("img", { name: /london bridge image/i}).should('exist');
  cy.findByRole("img", { name: /retro picture of myhotel/i}).should('exist');
})

it("displays correct room name for room that existed at build time", () => {
  cy.visit("/rooms/293");
  cy.findByText("Room 001").should('exist');
})

it("displays correct error message for room that does not exist", () => {
  cy.visit("/rooms/12345");
  cy.findByText("This room could not be found :(").should('exist');
})

