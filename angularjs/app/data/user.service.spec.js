'use strict';

describe('Service: User', function () {
  var sandbox;
  var userService;
  var githubService;

  beforeEach(module('satellizer'));
  beforeEach(module('app.data'));

  beforeEach(inject(function (_userService_, _githubService_) {
    sandbox = sinon.sandbox.create();
    userService = _userService_;
    githubService = _githubService_;
  }));

  afterEach(function () {
    sandbox.restore();
  });

  it('should return true when user logged-in', function () {
    sandbox.stub(localStorage, 'getItem', function (name) {
      if (name === 'satellizer_token') {
        return 'token!';
      }
    });
    expect(userService.checkLoggedIn()).to.be.true;
  });

  it('should return false when user not logged-in', function () {
    sandbox.stub(localStorage, 'getItem', function (name) {
      return null;
    });
    expect(userService.checkLoggedIn()).to.be.false;
  });

  it('should call removeItem when logout', function () {
    var removeItem = sandbox.spy(localStorage, 'removeItem');
    removeItem.withArgs();
    userService.logout();
    expect(removeItem.withArgs('satellizer_token').called).to.be.true;
  });
});
