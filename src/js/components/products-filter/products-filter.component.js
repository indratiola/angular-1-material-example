(function () {
  'use strict';

  function filterController($mdDialog, $log) {
    var vm = this;

    this.$onInit = function () {
      vm.form = {
        rating: 3,
        type: 15
      };
    };

    this.hide = function () {
      $mdDialog.hide();
    };

    this.cancel = function () {
      $mdDialog.cancel();
    };

    this.apply = function (form) {
      $mdDialog.hide(form).then(function (form) {
        $log.debug(form);
      });
    };
  }


  angular.module('myApp').component('productsFilter', {
    templateUrl: 'js/components/products-filter/products-filter.html',
    controller: filterController
  });

})();

