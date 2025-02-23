import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class LoginPage{
    get textHeaderLogin() {return $('//android.widget.TextView[@text="Login / Sign up Form"]');}
    get inputEmail() {return $('//android.widget.EditText[@content-desc="input-email"]');}
    get inputPassword() {return $('//android.widget.EditText[@content-desc="input-password"]');}
    get buttonLogin() {return $('//android.widget.TextView[@text="LOGIN"]');}
    get textErrorLogin() {return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');}
    get testSuccessLogin() {return $('//android.widget.TextView[@resource-id="android:id/message"]');}

    async inputEmailField(email) {
        allureReporter.startStep('Input Username');
        await this.inputEmail.setValue(email);
        allureReporter.endStep();
    }

    async inputPasswordField(password) {
        allureReporter.startStep('Input Password');
        await this.inputPassword.setValue(password);
        allureReporter.endStep();
    }

    async clickButtonLogin() {
        allureReporter.startStep('Click button Login');
        await this.buttonLogin.click();
        allureReporter.endStep();
    }

    async verifyErrorAppear(text) {
        allureReporter.startStep('Verify Login Error Appear');
        await expect(this.textErrorLogin).toBeExisting();
        await expect(this.textErrorLogin).toHaveText(text);
        allureReporter.endStep();
    }
    
    async verifySuccessAppear(text) {
        allureReporter.startStep('Verify Login Success Appear');
        await expect(this.testSuccessLogin).toBeExisting();
        await expect(this.testSuccessLogin).toHaveText(text);
        allureReporter.endStep();
    }
}

export default new LoginPage();