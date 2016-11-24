(function () {
  'use strict';

  function productsController($mdSidenav) {
    var vm = this;

    this.$onInit = function () {
      vm.showSearchBar = false;
      vm.listLayout = true;
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    };

  }


  angular.module('myApp').component('products', {
    templateUrl: 'js/components/products/products.html',
    controller: productsController
  });

})();

