(function () {
  'use strict';

  angular
    .module('app.login')
    .controller('Login', Login);

  /* @ngInject */
  function Login($auth, $state, $stateParams) {
    var vm = this;

    vm.login = login;

    function login() {
      $auth.authenticate('github')
        .then(function (response) {
          $state.transitionTo('root.home', $stateParams, {
            reload: true,
            inherit: false,
            notify: true,
          });
        });
    }
  }
})();
