import CommonAction from '../pageobjects/common.action.js';
import LoginPage from '../pageobjects/login.page.js';
import MenuPage from '../pageobjects/menu.page.js';

describe('Login Automation', () => {
    
    beforeEach(async () => {await CommonAction.launchApp();});
    afterEach(async () => {await CommonAction.closeApp();});

    it('As an Android user, I should be able to see Error when input incorrect Username and Password', async () => {
        await MenuPage.selectMenuLogIn();
        await LoginPage.inputEmailField("ricko@email.com");
        //await LoginPage.inputPasswordField("");
        await LoginPage.clickButtonLogin();
        await LoginPage.verifyErrorAppear("Please enter at least 8 characters");
    });

    it('As an Android user, I should be able to see Success when input correct Username and Password', async () => {
        await MenuPage.selectMenuLogIn();
        await LoginPage.inputEmailField("ricko@email.com");
        await LoginPage.inputPasswordField("password");
        await LoginPage.clickButtonLogin();
        await LoginPage.verifySuccessAppear("You are logged in!");
    });
});
