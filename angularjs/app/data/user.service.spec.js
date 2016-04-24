'use strict';

describe('Service: User', function () {
  var $q;
  var $scope;
  var sandbox;
  var userService;
  var githubService;

  beforeEach(module('satellizer'));
  beforeEach(module('app.data'));

  beforeEach(inject(function (_$q_, $rootScope, $window, _userService_, _githubService_) {
    $q = _$q_;
    $scope = $rootScope.$new();
    sandbox = sinon.sandbox.create();
    userService = _userService_;
    githubService = _githubService_;
    sandbox.stub($window.location, 'reload');
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

  it('should resolve data from memory when call getUser and logged-in', function () {
    var userData = {"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"};
    var getUser = sandbox.spy(githubService, 'getUser');
    sandbox.stub(localStorage, 'getItem', function (name) {
      if (name === 'satellizer_token') {
        return 'token!';
      }
    });
    userService.setUser(userData);
    userService.getUser();
    expect(getUser.called).to.be.false;
  });

  it('should get githubService.getUser when call getUser, logged-in and not have user data in memory', function () {
    sandbox.stub(localStorage, 'getItem', function (name) {
      if (name === 'satellizer_token') {
        return 'token!';
      }
    });
    sandbox.stub(githubService, 'getUser', function () {
      var deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    });
    userService.getUser().then(function () {
      assert.isOk(true);
    });
    $scope.$digest();
  });
});
