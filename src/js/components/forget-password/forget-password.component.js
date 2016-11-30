(function () {
  'use strict';

  function passwordController($log) {
    var vm = this;

    this.$onInit = function () {
      vm.form = {};
    };

    this.doRequest = function (form) {
      $log.debug(form);
    }
  }


  angular.module('myApp').component('forgetPassword', {
    templateUrl: 'js/components/forget-password/forget-password.html',
    controller: passwordController
  });

})();

