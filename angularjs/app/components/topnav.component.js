(function () {
  'use strict';

  angular
    .module('app.components', [])
    .component('topnav', {
      controller: Topnav,
      templateUrl: 'app/components/topnav.html',
    });

  /* @ngInject */
  function Topnav(githubService) {
    var vm = this;

    vm.userData = {};
    vm.loggedIn = checkLoggedIn();

    if (vm.loggedIn === true) {
      getUser();
    }

    function checkLoggedIn() {
      return githubService.checkLoggedIn();
    }

    function getUser() {
      return githubService.getUser()
        .then(function (data) {
          vm.userData = data;
        });
    }
  }
})();
