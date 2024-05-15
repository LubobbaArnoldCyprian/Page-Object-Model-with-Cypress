class Checkout {

    // Locators Checkout
    womenButton = ":nth-child(1) > .panel-heading > .panel-title > a"
    dressButton = "#Women > .panel-body > ul > :nth-child(1) > a"
    topsButton = "#Women > .panel-body > ul > :nth-child(2) > a"
    navBarLinks = 'a'
    textAreafield = "textarea[name='message']"
    placeOrderButton = ".btn.btn-default.check_out"
    cardNameField = "input[name='name_on_card']"
    cardNumberField = "input[name='card_number']"
    cardCvcField = "input[placeholder='ex. 311']"
    expirationMonthField = "input[placeholder='MM']"
    expirationYearField = "input[placeholder='YYYY']"
    submitPayment = "#submit"
    confirmPayment = '[data-qa="order-placed"] > b'


    // checkout
    click_women_button() {
        cy.get(this.womenButton).click()
    }

    click_dress_button() {
        cy.get(this.dressButton).click()
    }

    click_top_button() {
        cy.get(this.topsButton).click()
    }

    add_greenTop() {

        //cy.get('.features_items > :nth-child(7)').scrollIntoView()
        cy.get(':nth-child(7) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.btn.btn-default.cart').click()
        cy.get('.btn.btn-success.close-modal.btn-block').should('be.visible')
            .click()
        cy.go('back');

    }

    add_summerWhiteTop() {
        cy.get('.features_items > :nth-child(5)').scrollIntoView()
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.btn.btn-default.cart').click()
        cy.get('.btn.btn-success.close-modal.btn-block').should('be.visible')
            .click()

    }

    checkout() {
        cy.scrollTo('top')

        const cart = cy.get(this.navBarLinks)
        cart.contains('Cart')
        cart.click({ force: true })

        cy.scrollTo('right')
        // cy.wait(4000)
        cy.get(this.navBarLinks).contains('Proceed To Checkout')
            .should('be.visible')
            .click()

        cy.get(this.textAreafield).scrollIntoView()
            .click()
            .type('Order Placed')
        cy.get(this.placeOrderButton).click()
        cy.get(this.cardNameField).click()
            .type("Test Card")
        cy.get(this.cardNumberField).click()
            .type('4100 0000 0000')
        cy.get(this.cardCvcField).click()
            .type("123")
        cy.get(this.expirationMonthField).click()
            .type("01")
        cy.get(this.expirationYearField).click()
            .type("1900")
        cy.get(this.submitPayment).click()
        cy.get(this.confirmPayment).should("have.text", "Order Placed!")

    }
}

export default Checkout