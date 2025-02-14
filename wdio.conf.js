exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],
    maxInstances: 1,
    cucumberOpts: {
        require: ['./step_definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "emulator-5554",
        "appium:platformVersion": "11.0",
        "appium:automationName": "UiAutomator2",
        "appium:app": "/Users/efishery/Documents/Repo/99-automation-app/android.wdio.native.app.v1.0.8.apk",
        "appium:autoGrantPermissions": true
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: ['allure']
};
