
class Login {

    // Locators
    signUpLoginBtn = ".fa.fa-lock";
    emailField = '[data-qa="login-email"]';
    passwordField = '[data-qa="login-password"]';
    loginBtn = '[data-qa="login-button"]';


    click_login_home_page() {
        cy.get(this.signUpLoginBtn).click();
    }

    set_email(email) {
        cy.get(this.emailField).click()
            .type(email);
    }

    set_password(password) {
        cy.get(this.passwordField).click().type(password);
    }

    click_login_button() {
        cy.get(this.loginBtn).click();
    }

}

export default Login;

