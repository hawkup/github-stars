describe('Home e2e test', function () {
  it('should have a title', function () {
    browser.get('http://localhost:4200');
    expect(browser.getTitle()).toEqual('AngularJS: Github Stars');
  });

  describe('Not logged-in', function () {
    beforeEach(function () {
      browser.get('http://localhost:4200');
    });

    it('should go to login page when click login button on nav', function () {
      browser.driver.sleep(2000);
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
    beforeEach(function () {
      browser.addMockModule('httpBackendMock', function () {
        angular.module('httpBackendMock', ['app', 'ngMockE2E'])
          .run(function ($httpBackend) {
            $httpBackend
              .whenGET('https://api.github.com/user?access_token=123456789abcdefghijk')
              .respond({"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"});
          });
      });
      browser.executeScript('window.localStorage.clear();');
      browser.executeScript('window.localStorage.setItem("satellizer_token", "123456789abcdefghijk");');
      browser.get('http://localhost:4200');
    });

    afterEach(function () {
      browser.clearMockModules();
      browser.executeScript('window.localStorage.clear();');
    });

    it('should logout when click logout button on nav', function () {
      // sleep because browser-sync overlay
      browser.driver.sleep(2000);
      var topNav = element(by.css('.top-nav'));
      topNav.element(by.css('.-logout')).click();
      browser.driver.sleep(500);
      expect(browser.executeScript("return window.localStorage.getItem('satellizer_token');")).toBe(null);
    });

    it('should go to dashboard when click dashboard button', function () {
      element(by.css('.home-section')).element(by.css('.-dashboard')).click();
      browser.getCurrentUrl().then(function (url) {
        expect(url).toEqual('http://localhost:4200/#/dashboard');
      });
    });
  });
});
