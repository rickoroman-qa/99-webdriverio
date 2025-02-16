import CommonAction from '.../pageobjects/common.action.js';
import LoginPage from '.../pageobjects/login.page.js';
import MenuPage from '.../pageobjects/menu.page.js';

describe('Simple test for Login into Demo Apps', () => {
    
    beforeEach(async () => {await CommonAction.launchApp();});
    //afterEach(async () => {await CommonAction.closeApp();});

    it('As an Android user, I should be able to see Error when input incorrect Username and Password', async () => {
        await MenuPage.selectMenuLogIn();
        await LoginPage.inputEmailField("ricko@email.com");
        await LoginPage.inputPasswordField("");
        await LoginPage.clickButtonLogin();
        await LoginPage.verifyErrorAppear("Provided credentials do not match any user in this service.");
    });

    it('As an Android user, I should be able to see Success when input incorrect Username and Password', async () => {
        await MenuPage.selectMenuLogIn();
        await LoginPage.inputEmailField("ricko@email.com");
        await LoginPage.inputPasswordField("password");
        await LoginPage.clickButtonLogin();
        await LoginPage.verifySuccessAppear("Provided credentials match to any user in this service.");
    });
});
