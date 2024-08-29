Cypress.Commands.add('hacerCheckout', () => {
    cy.get('[placeholder="First Name"]').type('cualquiera')
    cy.get('[placeholder="Last Name"]').type('cualquiera apellido')
    cy.get('#postal-code').type('12345678')
    cy.get('#continue').click()
    cy.get('#finish').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})
