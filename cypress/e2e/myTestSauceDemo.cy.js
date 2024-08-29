describe('ChallengeFinal', { testIsolation: false }, () => {
    it('Compra con usuario 1 - Login con el usuario “standard_user”', () => {
        cy.clearLocalStorage()
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it('Agregar los productos al carrito', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    })
    it('Hacer el checkout', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.hacerCheckout()
    })
    it('Validar que haya realizado el checkout', () => {
        cy.contains('Thank you for your order!').should('be.visible')
    })
    it ('Realizar el logout', () => {
        cy.logout()
    })


    it('Compra con usuario 2 - Login con el usuario “problem_user”', () => {
        cy.clearLocalStorage()
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it('Agregar los productos al carrito', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    })
    it('Hacer el checkout', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.hacerCheckout()
    })
    it('Validar que haya realizado el checkout', () => {
        cy.contains('Thank you for your order!').should('be.visible')
    })
    it ('Realizar el logout', () => {
        cy.logout()
    })
})


