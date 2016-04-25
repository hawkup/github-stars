(function () {
  'use strict';

  angular
    .module('app.components')
    .component('repo', {
      bindings: {
        repo: '<',
      },
      controller: Repo,
      templateUrl: 'app/components/repo.html',
    });

  /* @ngInject */
  function Repo() { }
})();
