(function () {
  'use strict';

  angular
    .module('app.data')
    .factory('userService', userService);

  /* @ngInject */
  function userService($q, $auth, $window, githubService) {
    var userData = null;
    var service = {
      checkLoggedIn: checkLoggedIn,
      getUser: getUser,
      logout: logout,
      setUser: setUser,
    };

    return service;

    function checkLoggedIn() {
      return $auth.getToken() !== null ? true : false;
    }

    function getUser() {
      var deferred = $q.defer();

      if (checkLoggedIn() === false) {
        deferred.reject();
      } else {
        if (userData !== null) {
          deferred.resolve(userData);
        } else {
          githubService.getUser()
            .then(function (userData) {
              setUser(userData);
              deferred.resolve(userData);
            });
        }
      }

      return deferred.promise;
    }

    function logout() {
      setUser(null);
      $auth.logout();
      $window.location.reload();
    }

    function setUser(data) {
      userData = data;
    }
  }
})();
