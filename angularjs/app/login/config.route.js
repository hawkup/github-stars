(function () {
  'use strict';

  angular
    .module('app.login')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider) {
    $stateProvider
      .state('root.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'Login',
        controllerAs: 'vm',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'root.home',
          },
        },
      });
  }
})();
