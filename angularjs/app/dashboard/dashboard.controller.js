(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('Dashboard', Dashboard);

  /* @ngInject */
  function Dashboard($scope, $state, userData, starredData) {
    var vm = this;
    vm.userData = userData;
    vm.starredData = starredData;
  }
})();
