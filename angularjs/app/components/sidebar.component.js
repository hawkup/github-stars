(function () {
  'use strict';

  angular
    .module('app.components')
    .component('sidebar', {
      bindings: {
        user: '<',
      },
      controller: Sidebar,
      templateUrl: 'app/components/sidebar.html',
    });

  /* @ngInject */
  function Sidebar() { }
})();
