'use strict';

describe('Route: Home', function () {
  var $rootScope;
  var $state;

  beforeEach(module('ui.router'));
  beforeEach(module('app.home'));
  beforeEach(module('app.layout'));
  beforeEach(module('app.templates'));

  beforeEach(inject(function (_$rootScope_, _$state_) {
    $rootScope = _$rootScope_;
    $state = _$state_;
  }));

  describe('home route', function () {
    it('should load root.home state of /', function () {
      $state.go('root.home');
      $rootScope.$digest();
      expect($state.current.url).to.equal('/');
    })
  });
});
