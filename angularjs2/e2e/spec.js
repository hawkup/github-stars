'use strict';

describe('E2E', function () {
  it('should display "My First Angular2 App"', function () {
    browser.get('/');
    expect(element(by.css('h1')).getText()).toEqual('My First Angular2 App');
  });
});
