(function () {
  'use strict';

  angular
    .module('app.components', [])
    .component('topnav', {
      bindings: {
        user: '<',
        onLogout: '&',
      },
      controller: Topnav,
      templateUrl: 'app/components/topnav.html',
    });

  /* @ngInject */
  function Topnav() {
    var vm = this;

    vm.$onChanges = $onChanges;

    vm.loggedIn = false;

    vm.logout = logout;

    function $onChanges(changesObj) {
      vm.loggedIn = angular.isObject(changesObj.user.currentValue);
    }

    function logout() {
      vm.onLogout();
    }
  }
})();
