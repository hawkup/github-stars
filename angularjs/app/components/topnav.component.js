(function () {
  'use strict';

  angular
    .module('app.components', [])
    .component('topnav', {
      bindings: {
        user: '<',
      },
      controller: Topnav,
      templateUrl: 'app/components/topnav.html',
    });

  /* @ngInject */
  function Topnav() {
    var vm = this;

    vm.loggedIn = false;

    vm.$onChanges = $onChanges;

    function $onChanges(changesObj) {
      vm.loggedIn = angular.isObject(changesObj.user.currentValue);
    }
  }
})();
