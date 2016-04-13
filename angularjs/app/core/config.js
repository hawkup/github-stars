(function () {
  'use strict';

  var core = angular.module('app.core');

  core.run(permissionConfig);

  /* @ngInject */
  function permissionConfig(PermissionStore) {
    PermissionStore
      .definePermission('anonymous', function () {
        return false;
      });
  }
})();
