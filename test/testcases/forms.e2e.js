import CommonAction from '../pageobjects/common.action.js';
import FormsPage from '../pageobjects/login.page.js';
import MenuPage from '../pageobjects/menu.page.js';

describe('Forms Flow Automation', () => {
    const testCases = [
        {
            scenario: 'Scenario 1',
            email: 'forms1@99.co',
            switchState: 'ON',
            dropdown: 'webdriver.io is awesome',
            buttonsActive: true,
        },
        {
            scenario: 'Scenario 2',
            email: 'Form2@99.co',
            switchState: 'OFF',
            dropdown: 'This app is awesome',
            buttonsActive: true,
        },
        {
            scenario: 'Scenario 3',
            email: 'f0rm3@99.co',
            switchState: 'ON',
            dropdown: 'Appium is awesome',
            buttonsActive: false,
        }
    ];

    testCases.forEach(({ scenario, email, switchState, dropdown, buttonsActive }) => {
        it(`Validate form fields for ${scenario}`, async () => {
            await FormsPage.enterFieldText(scenario);
            await FormsPage.enterEmail(email);
            await FormsPage.toggleSwitch(switchState);
            await FormsPage.selectDropdown(dropdown);
            await FormsPage.verifyButtonState(buttonsActive);
        });
    });
});
