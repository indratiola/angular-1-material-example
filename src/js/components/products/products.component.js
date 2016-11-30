(function () {
  'use strict';

  function productsController($mdSidenav, $mdDialog, $log) {
    var vm = this;

    this.$onInit = function () {
      vm.items = [];
      vm.showSearchBar = false;
      vm.view = true;
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    };

    this.showFilter = function ($event) {
      $mdDialog.show({
        parent: angular.element(document.body),
        template: '<products-filter layout="column"></products-filter>',
        targetEvent: $event,
        clickOutsideToClose: true,
        escapeToClose: true,
        disableParentScroll: true,
        autoWrap: true,
        focusOnOpen: false
      }).then(function (form) {
        $log.debug(form);
      });
    };

  }


  angular.module('myApp').component('products', {
    templateUrl: 'js/components/products/products.html',
    controller: productsController
  });

})();

