(function () {
  'use strict';

  function sidenavController($mdSidenav, $mdDialog) {
    var vm = this;

    this.$onInit = function () {
      vm.user = 'John Doe';
    };

    this.closeSideNav = function () {
      $mdSidenav('sidenav-left').close();
    };

    this.developer = function ($event) {
      $mdDialog.show(
          $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('About this app')
              .textContent('Developed by: https://github/ankurk91')
              .ariaLabel('Developer')
              .ok('Close'));
      this.closeSideNav();
    }
  }


  angular.module('myApp').component('sidenavLeft', {
    templateUrl: 'js/components/sidenav-left/sidenav-left.html',
    controller: sidenavController
  });

})();

