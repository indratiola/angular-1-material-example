(function () {
  'use strict';

  function sidenavController($mdSidenav) {
    var vm = this;

    this.$onInit = function () {
      vm.user = 'John Doe';
    };

    this.closeSideNav = function () {
      $mdSidenav('sidenav-left').close();
    };
  }


  angular.module('myApp').component('sidenavLeft', {
    templateUrl: 'js/components/sidenav-left/sidenav-left.html',
    controller: sidenavController
  });

})();

