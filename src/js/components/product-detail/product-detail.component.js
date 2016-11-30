(function () {
  'use strict';

  function productDetailController($stateParams, $log, $mdToast) {
    var vm = this;

    this.$onInit = function () {
      $log.debug($stateParams);
      vm.product = {id: $stateParams.id};
    };

    this.addToCart = function () {
      $mdToast.show(
          $mdToast.simple()
              .textContent('Cart was updated')
              .position('top right')
              .hideDelay(3000)
      );
    };

  }


  angular.module('myApp').component('productDetail', {
    templateUrl: 'js/components/product-detail/product-detail.html',
    controller: productDetailController
  });

})();

