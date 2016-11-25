(function () {
  'use strict';

  function passwordController($log) {
    var vm = this;

    this.$onInit = function () {
      vm.user = {};
    };

    this.doRequest = function (user) {
      $log.debug(user);
    }
  }


  angular.module('myApp').component('forgetPassword', {
    templateUrl: 'js/components/forget-password/forget-password.html',
    controller: passwordController
  });

})();

