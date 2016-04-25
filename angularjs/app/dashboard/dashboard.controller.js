(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('Dashboard', Dashboard);

  /* @ngInject */
  function Dashboard(userService, githubService) {
    var vm = this;

    vm.userData = null;
    vm.starredData = null;

    getUser();

    function getUser() {
      userService.getUser()
        .then(function (user) {
          vm.userData = user;
          getStarred(vm.userData.login);
        })
        .catch(function () {
          vm.userData = null;
        });
    }

    function getStarred(login) {
      githubService.getStarred(login)
        .then(function (starred) {
          vm.starredData = starred;
        })
        .catch(function () {
          vm.starredData = null;
        });
    }
  }
})();
