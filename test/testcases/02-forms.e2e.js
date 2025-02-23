import CommonAction from '../pageobjects/common.action.js';
import FormsPage from '../pageobjects/forms.page.js';
import MenuPage from '../pageobjects/menu.page.js';

describe('Forms Automation', () => {

    beforeEach(async () => {await CommonAction.launchApp();});
    afterEach(async () => {await CommonAction.closeApp();});

    const testCases = [
        //scenario 1
        {
            scenario: 'Scenario 1',
            email: 'forms1@99.co',
            switchState: 'ON',
            dropdown: 'webdriver.io is awesome',
            buttons: true,
        },
        //scenario 2
        {
            scenario: 'Scenario 2',
            email: 'Form2@99.co',
            switchState: 'OFF',
            dropdown: 'This app is awesome',
            buttons: true,
        },
        //scenario 3
        {
            scenario: 'Scenario 3',
            email: 'f0rm3@99.co',
            switchState: 'ON',
            dropdown: 'Appium is awesome',
            buttons: false,
        }
    ];

    testCases.forEach(({ scenario, email, switchState, dropdown, buttons }) => {
        it(`Validate Forms flow for ${scenario}`, async () => {
            await MenuPage.selectMenuForms();
            await FormsPage.enterEmail(email);
            await FormsPage.toggleSwitch(switchState);
            await FormsPage.selectDropdown(dropdown);
            await FormsPage.verifyButtonState(buttons);
        });
    });
});
