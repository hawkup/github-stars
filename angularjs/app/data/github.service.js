(function () {
  'use strict';

  angular
    .module('app.data')
    .factory('githubService', githubService);

  /* @ngInject */
  function githubService($http, $q, $auth) {
    var service = {
      checkLoggedIn: checkLoggedIn,
      getStarred: getStarred,
      getUser: getUser,
    };

    return service;

    function checkLoggedIn() {
      return $auth.getToken() !== null ? true : false;
    }

    function getStarred(userLogin) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users/' + userLogin + '/starred')
        .success(function (data) {
          deferred.resolve(data);
        });

      return deferred.promise;
    }

    function getUser() {
      var deferred = $q.defer();
      var token = $auth.getToken();
      $http.get('https://api.github.com/user?access_token=' + token)
        .success(function (data) {
          deferred.resolve(data);
        });

      return deferred.promise;
    }
  }
})();
