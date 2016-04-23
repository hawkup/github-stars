(function () {
  'use strict';

  angular
    .module('app.home')
    .controller('Home', Home);

  /* @ngInject */
  function Home(userService) {
    var vm = this;

    vm.userData = null;
    vm.loggedIn = checkLoggedIn();

    getUser();

    function getUser() {
      userService.getUser()
        .then(function (user) {
          vm.userData = user;
        })
        .catch(function () {
          vm.userData = null;
        });
    }

    function checkLoggedIn() {
      return userService.checkLoggedIn();
    }
  }
})();
