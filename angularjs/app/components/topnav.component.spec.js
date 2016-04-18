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
  beforeEach(module('app.templates'));

  beforeEach(inject(function (_$rootScope_, _$componentController_, _$q_, _$compile_, _githubService_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $q = _$q_;
    $compile = _$compile_;
    githubService = _githubService_;
    sandbox = sinon.sandbox.create();
    $controller = _$componentController_;
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
    var userData = {login: 'hawkup'};
    sandbox.stub(githubService, 'checkLoggedIn', function () {
      return true;
    });
    sandbox.stub(githubService, 'getUser', function () {
      var deferred = $q.defer();
      deferred.resolve(userData);
      return deferred.promise;
    });
    var vm = $controller('topnav', {
      githubService: githubService,
      $scope: $scope
    });
    $scope.$digest();
    expect(vm.userData).to.eql(userData);
  });

  it('should show userName and logout button when logged-in', function () {
    var userData = {login: 'hawkup'};
    sandbox.stub(githubService, 'checkLoggedIn', function () {
      return true;
    });
    sandbox.stub(githubService, 'getUser', function () {
      var deferred = $q.defer();
      deferred.resolve(userData);
      return deferred.promise;
    });
    element = angular.element('<topnav></topnav>');
    element = $compile(element)($scope);
    var vm = $controller('topnav', {
      githubService: githubService,
      $scope: $scope,
      $element: element
    });
    $scope.$digest();
    expect(angular.element(element[0].querySelector('.username')).text()).to.not.empty;
    expect(angular.element(element[0].querySelector('.login')).hasClass('ng-hide')).to.be.true;
    expect(angular.element(element[0].querySelector('.logout')).hasClass('ng-hide')).to.be.false;
  });

  it('should show login button when user is not logged-in', function () {
    sandbox.stub(githubService, 'checkLoggedIn', function () {
      return false;
    });
    element = angular.element('<topnav></topnav>');
    element = $compile(element)($scope);
    var vm = $controller('topnav', {
      githubService: githubService,
      $scope: $scope,
      $element: element
    });
    $scope.$digest();
    expect(angular.element(element[0].querySelector('.username')).text()).to.empty;
    expect(angular.element(element[0].querySelector('.login')).hasClass('ng-hide')).to.be.false;
    expect(angular.element(element[0].querySelector('.logout')).hasClass('ng-hide')).to.be.true;
  });
});
