(function () {
  'use strict';

  function paymentController() {
    var vm = this;

    this.$onInit = function () {
      vm.user = {};
    }
  }


  angular.module('myApp').component('payment', {
    templateUrl: 'js/components/payment/payment.html',
    controller: paymentController
  });

})();

