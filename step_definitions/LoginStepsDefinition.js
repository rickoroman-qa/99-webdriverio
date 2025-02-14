const { Given, When, Then } = require('@cucumber/cucumber');
const { actorCalled, actorInTheSpotlight } = require('@serenity-js/core');
const { Click, Enter, isVisible } = require('@serenity-js/web');
const { Ensure } = require('@serenity-js/assertions');
const { LoginSteps } = require('../tasks/LoginSteps');
//const { Ensure, equals } = require('@serenity-js/assertions');
const { Text } = require('@serenity-js/webdriverio');
const { LoginPage } = require('../page_objects/LoginPage');

Given('the user opens the app', function () {
    this.actor = actorCalled('User');
});

When('the user clicks on the Login menu', function () {
    return this.actor.attemptsTo(
        Click.on(LoginPage.menuLogin)
    );
});

When('the user logs in with {string} and {string}', function (email, password) {
    return LoginSteps.loginWith(email, password);
});

Then('the user should be logged in successfully', function () {
    return LoginSteps.verifyLoginSuccess();
});

Then('the user should see an error message', function () {
    return LoginSteps.verifyLoginFailure();
});
