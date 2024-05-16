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

    addToCart = ".btn.btn-default.cart"
    addToCartSuccess = ".btn.btn-success.close-modal.btn-block"

    // Green Top
    greenTopHome = ".features_items > :nth-child(7)"
    greenTopHomeSelect = ":nth-child(7) > .product-image-wrapper > .choose > .nav > li > a"

    //white Top
    whitetopHome = ".features_items > :nth-child(5)"
    whitetopSelect = ":nth-child(5) > .product-image-wrapper > .choose > .nav > li > a"





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

        cy.get(this.greenTopHome).scrollIntoView()
        cy.get(this.greenTopHomeSelect).click()
        cy.get(this.addToCart).click()
        cy.get(this.addToCartSuccess).should('be.visible')
            .click()
        cy.go('back');

    }

    add_summerWhiteTop() {
        cy.get(this.whitetopHome).scrollIntoView()
        cy.get(this.whitetopSelect).click()
        cy.get(this.addToCart).click()
        cy.get(this.addToCartSuccess).should('be.visible')
            .click()

    }

    checkout(order_placed, card_name, card_number, card_cvc, card_expiry_date_month, card_expiry_date_year, assert_order, assert_checkout, assert_cart_link) {
        cy.scrollTo('top')

        const cart = cy.get(this.navBarLinks)
        cart.contains(assert_cart_link)
        cart.click({ force: true })

        cy.scrollTo('right')
        // cy.wait(4000)
        cy.get(this.navBarLinks).contains(assert_checkout)
            .should('be.visible')
            .click()

        cy.get(this.textAreafield).scrollIntoView()
            .click()
            .type(order_placed)
        cy.get(this.placeOrderButton).click()


        cy.get(this.cardNameField).click()
            .type(card_name)
        cy.get(this.cardNumberField).click()
            .type(card_number)
        cy.get(this.cardCvcField).click()
            .type(card_cvc)
        cy.get(this.expirationMonthField).click()
            .type(card_expiry_date_month)
        cy.get(this.expirationYearField).click()
            .type(card_expiry_date_year)
        cy.get(this.submitPayment).click()
        cy.get(this.confirmPayment).should("have.text", assert_order)

    }
}

export default Checkout