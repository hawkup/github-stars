'use strict';

describe('Component: topnav', function () {
  var $controller;
  var $rootScope;
  var $scope;
  var $q;
  var $compile;
  var element;
  var githubService;
  var sandbox;

  beforeEach(module('satellizer'));
  beforeEach(module('ui.router'));
  beforeEach(module('app.data'));
  beforeEach(module('app.components'));

  beforeEach(inject(function (_$rootScope_, _$componentController_, _$q_, _$compile_, _githubService_, $templateCache) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $q = _$q_;
    $compile = _$compile_;
    githubService = _githubService_;
    sandbox = sinon.sandbox.create();
    $controller = _$componentController_;
    $templateCache.put('app/components/topnav.html', '<div><span>{{userData.login}}</span><button ng-show="loggedIn === false">Login</button><button ng-show="loggedIn === true">Logout</button></div>');
  }));

  afterEach(function () {
    sandbox.restore();
  });

  it('should call checkLoggedIn', function () {
    var checkLoggedIn = sandbox.spy(githubService, 'checkLoggedIn');
    $controller('topnav', {
      githubService: githubService,
      $scope: $scope
    });
    expect(checkLoggedIn.calledOnce).to.be.true;
  });

  it('should call getUser when logged-in', function () {
    var getUser = sandbox.spy(githubService, 'getUser');
    sandbox.stub(githubService, 'checkLoggedIn', function () {
      return true;
    });
    var vm = $controller('topnav', {
      githubService: githubService,
      $scope: $scope
    });
    expect(vm.loggedIn).to.be.true;
    expect(getUser.calledOnce).to.be.true;
  });

  it('should set userData when getUser success', function () {
    var userData = {user: 'user'};
    sandbox.stub(githubService, 'checkLoggedIn', function () {
      return true;
    });
    sandbox.stub(githubService, 'getUser', function () {
      var deferred = $q.defer();
      deferred.resolve(userData);
      return deferred.promise;
    })
    var vm = $controller('topnav', {
      githubService: githubService,
      $scope: $scope
    });
    $scope.$digest();
    expect(vm.userData).to.eql(userData);
  });

  it('should show userName and logout button when logged-in', function () {
    element = angular.element('<topnav></topnav>');
    element = $compile(element)($scope);
    $scope.$digest();
    console.log(element.find('span'));
    console.log(element.find('button'));
  });

  it('should show login button when user is not logged-in', function () {

  });
});
