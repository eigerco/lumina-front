describe('Lumina Tests', () => {
  // SETUP
  // -----
  // 1. Visit the app
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })


  // TESTS
  // ------

  // 1. Check if the title is rendered correctly
  it('should render the title', () => {
    // cy.get('[data-id="first-title"]').should('have.text', 'Start your Celestia light node')
    cy.get('[data-id="first-title"]').should(($element) => {
      expect($element).to.have.class('test-ready');
      expect($element.text()).to.contain('Start your Celestia light node');
    })
  })
})