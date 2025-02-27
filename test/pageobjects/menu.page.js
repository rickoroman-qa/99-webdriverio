import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class MenuPage{
    get textMenuForms() {return $('//android.view.View[@content-desc="Forms"]');}
    get textMenuLogin() {return $('//android.view.View[@content-desc="Login"]');}

    async selectMenuForms() {
        allureReporter.startStep('Select Menu "Forms"');
        await this.textMenuForms.click();
        allureReporter.endStep();
    }

    async selectMenuLogIn() {
        allureReporter.startStep('Select Menu "Log In"');
        await this.textMenuLogin.click();
        allureReporter.endStep();
    }
}

export default new MenuPage();