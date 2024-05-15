import Automation from "../pageObjects/login_page/loginpage_objects";
import Checkout from "../pageObjects/checkout_page/checkoutpage_objects";
import Items from "../pageObjects/featuredItems_page/featuredItems_objects"
// import 'cypress-xpath';


describe('Automation Assesment', () => {

    const automation = new Automation();
    const checkout = new Checkout()
    const items = new Items()

    beforeEach(() => {
        cy.visit('/');
        cy.fixture('data').then((data) => {

            automation.click_login_home_page();
            automation.set_email(data.email);
            automation.set_password(data.password);
            automation.click_login_button();
        });
    });


    it('Checkout fancy green top and Summer White top', () => {

        cy.fixture('data').then((data) => {

            checkout.click_women_button();
            checkout.click_dress_button();
            checkout.click_women_button();
            checkout.click_top_button();
            checkout.add_greenTop()
            checkout.add_summerWhiteTop()
            checkout.checkout()

        });
    })

    it('Featured Items', () => {
        items.select_all_prices()

    })



});
