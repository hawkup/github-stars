(function () {
  'use strict';

  angular.module('app', [
    /*
     * Shared modules
     */
    'app.core',
    'app.services',

    /*
     * Feature areas
     */
    'app.dashboard',
    'app.home',
    'app.layout',
    'app.login',
  ]);
})();
