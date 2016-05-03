(function () {
  'use strict';

  var core = angular.module('app.core');

  core.run(permission);

  /* @ngInject */
  function permission(permissionHelper, userService) {
    var configs = [
      {
        state: 'root.login',
        permission: function () {
          return !userService.checkLoggedIn();
        },

        redirect: 'root.home',
      },
      {
        state: 'root.dashboard',
        permission: function () {
          return userService.checkLoggedIn();
        },

        redirect: 'root.login',
      },
    ];
    permissionHelper.configure(configs);
  }

  core.config(authConfig);

  /* @ngInject */
  function authConfig($authProvider) {
    $authProvider.github({
      url: 'https://github-token-server.herokuapp.com/token',
      clientId: '9d7adef7a79a1db9bef4',
    });
  }
})();
