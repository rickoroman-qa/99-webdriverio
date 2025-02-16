import { driver } from '@wdio/globals';
import { config } from '../../wdio.conf.js';
import allureReporter from '@wdio/allure-reporter';

export class CommonAction{
    async launchApp() {
        allureReporter.startStep('Launch App');
        await driver.activateApp(config.capabilities.at(0)['appium:appPackage']);
        allureReporter.endStep();
    }

    async closeApp() {
        allureReporter.startStep('Close App');
        await driver.terminateApp(config.capabilities.at(0)['appium:appPackage']);
        allureReporter.endStep();
    }

    async hideAndroidKeyboard(){
        allureReporter.startStep('Hide Android Keyboard');
        await driver.hideKeyboard();
        allureReporter.endStep();
    }

    async scrollUp(){
        allureReporter.startStep('Scroll Up Screen');
        const screenSize = await driver.getWindowSize();
        await driver.executeScript("mobile: scrollGesture", [
            { direction: "up", left: screenSize.width * 0.5, top: screenSize.height * 0.5, width: screenSize.width * 0.9, height: screenSize.height * 0.9, percent: 0.25}
        ]);
        allureReporter.endStep();
    }

    async scrollDown(){
        allureReporter.startStep('Scroll Down Screen');
        const screenSize = await driver.getWindowSize();
        await driver.executeScript("mobile: scrollGesture", [
            { direction: "down", left: screenSize.width * 0.025, top: screenSize.height * 0.025, width: screenSize.width * 0.9, height: screenSize.height * 0.9, percent: 0.25}
        ]);
        allureReporter.endStep();
    }
}

export default new CommonAction();
