(function () {
  'use strict';

  function cartController($mdSidenav) {
    var vm = this;

    this.$onInit = function () {
      vm.items = [];
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    }
  }


  angular.module('myApp').component('cart', {
    templateUrl: 'js/components/cart/cart.html',
    controller: cartController
  });

})();

