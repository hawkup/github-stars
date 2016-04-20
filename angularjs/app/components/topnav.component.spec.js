'use strict';

describe('Component: topnav', function () {
  var user;
  var $controller;
  var $scope;
  var $compile;
  var element;
  var sandbox;

  beforeEach(module('satellizer'));
  beforeEach(module('ui.router'));
  beforeEach(module('app.data'));
  beforeEach(module('app.components'));
  beforeEach(module('app.templates'));

  beforeEach(inject(function ($rootScope, _$componentController_, _$compile_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
    sandbox = sinon.sandbox.create();
    $controller = _$componentController_;
    user = {"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"};
  }));

  afterEach(function () {
    sandbox.restore();
  });

  it('should set loggedIn to be false when user is null', function () {
    var vm = $controller('topnav',
      { $scope: $scope },
      { user: null }
    );
    expect(vm.loggedIn).to.be.false;
  });

  it('should set loggedIn to be true when user exist', function () {
    var vm = $controller('topnav',
      { $scope: $scope },
      { user: null }
    );
    vm.$onChanges({user: {currentValue: user}});
    expect(vm.loggedIn).to.be.true;
  });

  it('should show userName and logout button when logged-in', function () {
    element = angular.element('<topnav user="user"></topnav>');
    element = $compile(element)($scope);
    $scope.user = user;
    $scope.$digest();
    expect(angular.element(element[0].querySelector('.username')).text()).to.not.empty;
    expect(angular.element(element[0].querySelector('.login')).hasClass('ng-hide')).to.be.true;
    expect(angular.element(element[0].querySelector('.logout')).hasClass('ng-hide')).to.be.false;
  });

  it('should show login button when user is not logged-in', function () {
    user = null;
    element = angular.element('<topnav user="user"></topnav>');
    element = $compile(element)($scope);
    $scope.user = user;
    $scope.$digest();
    expect(angular.element(element[0].querySelector('.username')).text()).to.empty;
    expect(angular.element(element[0].querySelector('.login')).hasClass('ng-hide')).to.be.false;
    expect(angular.element(element[0].querySelector('.logout')).hasClass('ng-hide')).to.be.true;
  });
});
