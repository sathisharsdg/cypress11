describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.log("hi hello VETRI")
    cy.log("hi im sathish");
    cy.log("changes from ARUNACHALAM");
    cy.log("changes from Test");
    cy.log("changes from Test AGAIN");
    cy.log("changes from Test AGAIN 123");
    cy.log("changes from Test AGAIN 444");
    cy.log("changes from Test NEW BRANCH AGAIN 444");
  })
})
