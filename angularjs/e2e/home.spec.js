describe('Home e2e test', function () {
  beforeEach(function () {
    browser.get('http://localhost:4200');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('AngularJS: Github Stars');
  });

  describe('Not logged-in', function () {
    it('should go to login page when click login button on nav', function () {
      var topNav = element(by.css('.top-nav'));
      topNav.element(by.css('.-login')).click();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:4200/#/login');
      });
    });
    it('should go to login page when click login button on center section', function () {
      var homeSection = element(by.css('.home-section'));
      homeSection.element(by.css('.-login')).click();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:4200/#/login');
      });
    });
  });

  describe('Logged-in', function () {
    it('should logout when click logout button on nav');
    it('should go to dashboard when click dashboard button');
  });
});
