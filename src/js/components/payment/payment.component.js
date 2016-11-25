(function () {
  'use strict';

  function paymentController($log) {
    var vm = this;

    this.$onInit = function () {
      vm.form = {};
    };

    this.doPayment = function (form) {
      $log.debug(form);
    };
  }


  angular.module('myApp').component('payment', {
    templateUrl: 'js/components/payment/payment.html',
    controller: paymentController
  });

})();

