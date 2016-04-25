(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('Dashboard', Dashboard);

  /* @ngInject */
  function Dashboard($auth, $state, $stateParams) {
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
