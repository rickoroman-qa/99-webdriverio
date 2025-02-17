import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

class FormsPage {
    get fieldLabel() { return $('//android.widget.EditText[@content-desc="text-input"]'); }
    get emailInput() { return $('//android.widget.EditText[@content-desc="text-input"]'); }
    get switchToggle() { return $('//android.widget.Switch[@content-desc="switch"]'); }
    get dropdown() { return $('//android.widget.EditText[@resource-id="text_input"]'); }
    get activeButton() { return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup'); }
    get inactiveButton() { return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup'); }

    async enterFieldText(expectedText) {
        allureReporter.addStep(`Verifying Field Label: ${expectedText}`);
        await expect(this.fieldLabel).toHaveText(expectedText);
    }

    async enterEmail(email) {
        allureReporter.addStep(`Entering Email: ${email}`);
        await this.emailInput.setValue(email);
    }

    async toggleSwitch(state) {
        const isChecked = await this.switchToggle.getAttribute('checked');
        if ((state === 'ON' && isChecked === 'false') || (state === 'OFF' && isChecked === 'true')) {
            allureReporter.addStep(`Toggling Switch: ${state}`);
            await this.switchToggle.click();
        }
    }

    async selectDropdown(option) {
        allureReporter.addStep(`Selecting Dropdown Option: ${option}`);
        await this.dropdown.click();
        await $(`//*[@text="${option}"]`).click();
    }

    async verifyButtonState(isActive) {
        if (isActive) {
            allureReporter.addStep(`Verifying Active Button is enabled`);
            await expect(this.activeButton).toBeEnabled();
        } else {
            allureReporter.addStep(`Verifying Inactive Button is disabled`);
            await expect(this.inactiveButton).toBeDisabled();
        }
    }
}

export default new FormsPage();
