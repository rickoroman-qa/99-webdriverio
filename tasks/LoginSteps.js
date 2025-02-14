const { actorInTheSpotlight } = require('@serenity-js/core');
const { Enter, Click, Wait } = require('@serenity-js/webdriverio');
const { LoginPage } = require('../page_objects/LoginPage');
const { Ensure, isPresent } = require('@serenity-js/assertions');

class LoginSteps {
    
    static loginWith(email, password) {
        return actorInTheSpotlight().attemptsTo(
            //Wait.until(LoginPage.menuLogin, isVisible()),  
            Click.on(LoginPage.menuLogin), 
            Wait.until(LoginPage.inputEmail, isVisible()), 
            Enter.theValue(email).into(LoginPage.EmailField),
            Enter.theValue(password).into(LoginPage.PasswordField),
            Click.on(LoginPage.LoginButton)
        );
    }

    static verifyLoginSuccess() {
        return actorInTheSpotlight().attemptsTo(
            Wait.until(LoginPage.SuccessMessage, isPresent()),
            Ensure.that(LoginPage.SuccessMessage, isPresent())
        );
    }

    static verifyLoginFailure() {
        return actorInTheSpotlight().attemptsTo(
            Wait.until(LoginPage.ErrorMessage, isPresent()),
            Ensure.that(LoginPage.ErrorMessage, isPresent())
        );
    }
}

module.exports = { LoginSteps };
