(function () {
  'use strict';

  angular
    .module('app.data')
    .factory('userService', userService);

  /* @ngInject */
  function userService($q, $auth, githubService) {
    var userData = null;
    var service = {
      checkLoggedIn: checkLoggedIn,
      getUser: getUser,
      logout: logout,
    };

    return service;

    function checkLoggedIn() {
      return $auth.getToken() !== null ? true : false;
    }

    function getUser() {
      var deferred = $q.defer();
      if (userData !== null) {
        deferred.resolve(userData);
      } else {
        githubService.getUser()
          .then(function (userData) {
            deferred.resolve(userData);
          });
      }

      return deferred.promise;
    }

    function logout() {
      userData = null;
      $auth.logout();
    }
  }
})();
