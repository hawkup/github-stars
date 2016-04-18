'use strict';

describe('Route: Layout', function () {
  var $rootScope;
  var $state;
  var $location;

  beforeEach(module('ui.router'));
  beforeEach(module('app'));

  beforeEach(inject(function (_$rootScope_, _$state_, _$location_, $templateCache) {
    $rootScope = _$rootScope_;
    $state = _$state_;
    $location = _$location_;
    $templateCache.put('app/layout/shell.html', '');
    $templateCache.put('app/home/home.html', '');
  }));

  describe('root route', function () {
    it('root state is abstract state', function () {
      var config = $state.get('root');
      expect(config.abstract).to.be.true;
    });

    it('should redirect to root state on non-existent', function () {
      $location.path('/xxx');
      $rootScope.$digest();
      expect($state.current.name).to.equal('root.home');
    });
  });
});
