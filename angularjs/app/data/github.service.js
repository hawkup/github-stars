(function () {
  'use strict';

  angular
    .module('app.data')
    .factory('githubService', githubService);

  /* @ngInject */
  function githubService($http, $q) {
    var service = {
      getUser: getUser,
      getStarred: getStarred,
    };

    return service;

    function getUser(userLogin, token) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users/' + userLogin + '?access_token=' + token)
        .success(function (data) {
          deferred.resolve(data);
        });

      return deferred.promise;
    }

    function getStarred(userLogin) {
      var deferred = $q.defer();
      $http.get('https://api.github.com/users/' + userLogin + '/starred')
        .success(function (data) {
          deferred.resolve(data);
        });

      return deferred.promise;
    }
  }
})();
