(function () {
  'use strict';

  var core = angular.module('app.core');

  core.config(authConfig);

  /* @ngInject */
  function authConfig($authProvider) {
    $authProvider.github({
      url: 'https://github-token-server.herokuapp.com/token',
      clientId: '9d7adef7a79a1db9bef4',
    });
  }
})();
