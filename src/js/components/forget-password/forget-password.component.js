(function () {
  'use strict';

  function passwordController() {
    var vm = this;

    this.$onInit = function () {
      vm.form = {};
    }
  }


  angular.module('myApp').component('forgetPassword', {
    templateUrl: 'js/components/forget-password/forget-password.html',
    controller: passwordController
  });

})();

