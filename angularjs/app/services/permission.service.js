(function () {
  'use strict';

  angular
    .module('app.services')
    .provider('permissionHelper', permissionHelperProvider);

  /* @ngInject */
  function permissionHelperProvider($stateProvider) {
    this.$get = PermissionHelper;

    /* @ngInject */
    function PermissionHelper($rootScope, $state) {
      var service = {
        configure: configure,
        getStates: getStates,
      };
      return service;

      function configure(configs) {
        angular.forEach(configs, function (config) {
          $rootScope.$on('$stateChangeStart',
          function (event, toState) {
            if (toState.name === config.state && config.permission === false) {
              event.preventDefault();
              $state.go(config.redirect);
            }
          });
        });
      }

      function getStates() {
        return $state.get();
      }
    }
  }
})();
