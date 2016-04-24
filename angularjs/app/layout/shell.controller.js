(function () {
  'use strict';

  angular
    .module('app.layout')
    .controller('Shell', Shell);

  /* @ngInject */
  function Shell(userService) {
    var vm = this;
    vm.userData = null;
    vm.onLogout = onLogout;

    getUser();

    function getUser() {
      userService.getUser()
        .then(function (userData) {
          vm.userData = userData;
        })
        .catch(function () {
          vm.userData = null;
        });
    }

    function onLogout() {
      userService.logout();
    }
  }
})();
