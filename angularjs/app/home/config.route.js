(function () {
  'use strict';

  angular
    .module('app.home')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'Home',
        controllerAs: 'vm',
      });
  }
})();
