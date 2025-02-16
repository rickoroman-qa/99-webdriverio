const config = {
    runner: 'local',
    specs: ['./test/testcases/**/*.js'],
    port: 4724,
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        "platformName": "Android",
        "appium:deviceName": "Pixel_3a_API_31",
        "appium:platformVersion": "12.0",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.MainActivity",
        "appium:autoGrantPermissions": "true"
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};

module.exports = { config };
