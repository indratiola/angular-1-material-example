(function () {
  'use strict';

  function purchasesController($mdSidenav) {
    var vm = this;

    this.$onInit = function () {
      vm.showSearchBar = false;
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    };

    this.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
  }


  angular.module('myApp').component('purchases', {
    templateUrl: 'js/components/purchases/purchases.html',
    controller: purchasesController
  });

})();

