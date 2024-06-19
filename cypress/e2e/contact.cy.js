describe('Contact page and form E2E tests', () => {
  it('Contact page container and form are visible', () => {
    cy.visit('/');
    cy.findByRole('link', { name: /contact/i }).click();
    cy.title().should('contain', 'MyHotel - Contact');
    cy.get('h1').should('be.visible');
    cy.findByRole('heading', {
      name: 'Any question? Please send us a message.',
    }).should('exist');
    cy.get('[data-cy="contact-page"]').should('be.visible');
    cy.get('[data-cy="contact-form"]').should('be.visible');
  });
  it('Sends a contact message successfully', () => {
    cy.visit('/contact');
    cy.get('[name="fullName"]').type('John Doe');
    cy.get('[name="email"]').type('johndoe@test.com');
    cy.get('[name="subject"]').type('Test subject');
    cy.get('[name="message"]').type('Test message');
    cy.contains('Submit form').click();
    cy.url().should('eq', 'http://localhost:3000/contact/success');
  });
});
