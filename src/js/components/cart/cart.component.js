(function () {
  'use strict';

  function cartController($mdSidenav) {
    var vm = this;

    this.$onInit = function () {
      vm.items = [];
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    };

    this.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
  }


  angular.module('myApp').component('cart', {
    templateUrl: 'js/components/cart/cart.html',
    controller: cartController
  });

})();

