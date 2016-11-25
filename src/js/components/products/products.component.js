(function () {
  'use strict';

  function productsController($mdSidenav, $mdDialog) {
    var vm = this;

    this.$onInit = function () {
      vm.showSearchBar = false;
      vm.listLayout = true;
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    };

    this.showFilter = function ($event) {
      //todo show filter dialog
    };

  }


  angular.module('myApp').component('products', {
    templateUrl: 'js/components/products/products.html',
    controller: productsController
  });

})();

