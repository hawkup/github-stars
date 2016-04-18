(function () {
  'use strict';

  angular.module('app.core', [
    'app.data',
    'app.components',

    'permission',
    'satellizer',
    'ui.router',
  ]);
})();
