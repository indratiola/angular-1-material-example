(function () {
  'use strict';

  function loginController($log) {
    var vm = this;

    this.$onInit = function () {
      vm.message = 'test';
      vm.user = {};
    };

    this.doLogin = function (user) {
      $log.debug(user);
    }
  }


  angular.module('myApp').component('login', {
    templateUrl: 'js/components/login/login.html',
    controller: loginController
  });

})();

