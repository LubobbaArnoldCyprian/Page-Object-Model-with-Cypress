import Login from "../pageObjects/login_page/loginpage_objects";
import Checkout from "../pageObjects/checkout_page/checkoutpage_objects";
import Items from "../pageObjects/featuredItems_page/featuredItems_objects"
// import 'cypress-xpath';


describe('Automation Assesment', () => {

    const login = new Login();
    const checkout = new Checkout()
    const items = new Items()

    beforeEach(() => {
        cy.visit('/');

    });

    it('Featured Items', () => {
        items.select_all_prices()

    })

    it('Login and Checkout the fancy green top & Summer White top', () => {

        cy.fixture('data').then((data) => {

            login.click_login_home_page();
            login.set_email(data.email);
            login.set_password(data.password);
            login.click_login_button();

            checkout.click_women_button();
            checkout.click_dress_button();
            checkout.click_women_button();
            checkout.click_top_button();
            checkout.add_greenTop()
            checkout.add_summerWhiteTop()
            checkout.checkout(data.order_placed, data.card_name, data.card_number, data.card_cvc, data.card_expiry_date_month, data.card_expiry_date_year, data.assert_order, data.assert_checkout, data.assert_cart_link)

        });
    })



});
