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
        resolve: {
          userData: function (userService) {
            return userService.getUser();
          },

          starredData: function (userData, githubService) {
            return githubService.getStarred(userData.login);
          },
        },
      });
  }
})();
