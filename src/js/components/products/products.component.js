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
      $mdDialog.show({
        parent: angular.element(document.body),
        template: '<products-filter></products-filter>',
        targetEvent: $event,
        clickOutsideToClose: true,
        escapeToClose: true,
        disableParentScroll: true,
        autoWrap: true,
        focusOnOpen: false
      }).then(function (form) {

      });
    };

  }


  angular.module('myApp').component('products', {
    templateUrl: 'js/components/products/products.html',
    controller: productsController
  });

})();

