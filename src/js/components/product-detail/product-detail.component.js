(function () {
  'use strict';

  function productDetailController($stateParams) {
    var vm = this;

    this.$onInit = function () {
      console.log($stateParams);
      vm.product = {id: $stateParams.id};
    };

  }


  angular.module('myApp').component('productDetail', {
    templateUrl: 'js/components/product-detail/product-detail.html',
    controller: productDetailController
  });

})();

