(function () {
  'use strict';

  function productsController() {
    var vm = this;

    this.$onInit = function () {
      vm.message = 'test';
    }
  }


  angular.module('myApp').component('products', {
    templateUrl: 'views/home.html',
    controller: productsController
  });

})();

