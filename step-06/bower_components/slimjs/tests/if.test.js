module.exports = {
    beforeEach: function(browser, done) {
        browser.deleteCookies().url('http://localhost:8000/tests/if.test.html');
        global.staticServer.start(done);
    },

    afterEach: function(browser, done) {
        browser.deleteCookies().end(done);
        global.staticServer.stop();
    },

    'slim-if': function(browser) {
        browser.waitForElementPresent('#slimIfTest');
        browser.execute(`
            window.unit.toggle = false;
        `);
        browser.waitForElementNotPresent('#slimIfTest')
        browser.execute(`
            window.unit.toggle = true;
        `);
        browser.waitForElementPresent('#slimIfTest');
    }
};