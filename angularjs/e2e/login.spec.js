describe('Login e2e test', function () {
  describe('Not logged-in', function () {
    it('should open github login popup when click login button', function () {
      browser.get('http://localhost:4200/#/login');
      element(by.css('button')).click();
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]).then(function () {
          expect(browser.driver.getCurrentUrl()).toMatch(/github.com/);
          browser.driver.close().then(function () {
            browser.switchTo().window(handles[0]);
          });
        });
      });
    });
  });

  describe('Logged-in', function () {
    it('should redirect to home page', function () {
      browser.executeScript('window.localStorage.clear();');
      browser.executeScript('window.localStorage.setItem("satellizer_token", "123456789abcdefghijk");');
      browser.get('http://localhost:4200/#/login');
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:4200/#/');
      });
    });
  });
});
