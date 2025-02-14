const { Target } = require('@serenity-js/web');
const { by } = require('webdriverio');

class LoginPage {
    static menuLogin = Target.the('"Login" menu')
        .locatedBy('~menu-login');
    static inputEmail = Target.the('"Email" input field')
        .locatedBy('~input-email');
    static inputPassword = Target.the('"Password" input field')
        .locatedBy('~input-password');
    static loginButton = Target.the('"Login" button')
        .locatedBy('//android.widget.TextView[@text="LOGIN"]');
    static errorMessage = Target.the('"Error message"')
        .locatedBy('//android.widget.TextView[@text="Invalid credentials"]');
}

module.exports = { LoginPage };
