'use strict';

describe('Controller: Home', function () {
  var $scope;
  var $controller;
  var $q;
  var userService;
  var sandbox;
  var user;

  beforeEach(module('satellizer'));
  beforeEach(module('ui.router'));
  beforeEach(module('app.data'));
  beforeEach(module('app.home'));

  beforeEach(inject(function ($rootScope, _$controller_, _$q_, _userService_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $q = _$q_;
    userService = _userService_;
    sandbox = sinon.sandbox.create();
    user = {"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"};
  }));

  afterEach(function () {
    sandbox.restore();
  });

  it('should set "user" data from userService when logged-in', function () {
    sandbox.stub(userService, 'getUser', function () {
      var deferred = $q.defer();
      deferred.resolve(user);
      return deferred.promise;
    });

    var vm = $controller('Home', {
      $scope: $scope,
      userService: userService
    });

    $scope.$digest();

    expect(vm.userData).to.deep.equal(user);
  });

  it('should set "isLoggedIn" is true when checkLoggedIn from userService return true', function () {
    sandbox.stub(userService, 'checkLoggedIn', function () {
      return true;
    });

    var vm = $controller('Home', {
      $scope: $scope,
      userService: userService
    });

    expect(vm.loggedIn).to.be.true;
  });

  it('should set "isLoggedIn" is false when checkLoggedIn from userService return false', function () {
    sandbox.stub(userService, 'checkLoggedIn', function () {
      return false;
    });

    var vm = $controller('Home', {
      $scope: $scope,
      userService: userService
    });

    expect(vm.loggedIn).to.be.false;
  });
});
