(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {
    $stateProvider
      .state('root.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'Dashboard',
        controllerAs: 'vm',
      });
  }
})();
