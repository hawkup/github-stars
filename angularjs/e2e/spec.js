describe('E2E test', function () {
  beforeEach(function () {
    browser.get('http://localhost:4200');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('AngularJS: Github Stars');
  });
});
