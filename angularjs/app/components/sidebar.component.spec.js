'use strict';

describe('Component: sidebar', function () {
  var $scope;
  var $compile
  var user;

  beforeEach(module('app.components'));
  beforeEach(module('app.templates'));

  beforeEach(inject(function ($rootScope, _$compile_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
    user = {"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"};
  }));

  it('should display login name', function () {
    var element = angular.element('<sidebar user="user"></sidebar>');
    element = $compile(element)($scope);
    $scope.user = user;
    $scope.$digest();
    expect(angular.element(element[0].querySelector('.login')).text()).to.equal('hawkup');
  });

  it('should display avatar', function () {
    var element = angular.element('<sidebar user="user"></sidebar>');
    element = $compile(element)($scope);
    $scope.user = user;
    $scope.$digest();
    expect(angular.element(element[0].querySelector('.avatar')).attr('src')).to.equal('https://avatars.githubusercontent.com/u/2748846?v=3');
  });
});
