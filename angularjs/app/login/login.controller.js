(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  /* @ngInject */
  function Login($auth) {
    var vm = this;

    vm.login = login;

    function login() {
      $auth.authenticate('github')
        .then(function (response) {
          console.log(response);
        });
    }
  }
})();
