(function () {
  'use strict';

  angular
    .module('app.layout')
    .config(appRun);

  /* @ngInject */
  function appRun($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        abstract: true,
        templateUrl: 'app/layout/main.html',
      });
  }
})();
