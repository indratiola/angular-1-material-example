(function () {
  'use strict';

  function sidenavController($mdSidenav, $state) {
    var vm = this;

    this.$onInit = function () {
      vm.user = 'John Doe';
    };

    this.closeSideNav = function () {
      $mdSidenav('sidenav-left').close();
    };

    this.goTo = function (state) {
      $mdSidenav('sidenav-left').close().then(function () {
        $state.go(state);
      });
    }
  }


  angular.module('myApp').component('sidenavLeft', {
    templateUrl: 'js/components/sidenav-left/sidenav-left.html',
    controller: sidenavController
  });

})();

