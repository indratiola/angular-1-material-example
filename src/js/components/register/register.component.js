(function () {
  'use strict';

  function registerController($log) {
    var vm = this;

    this.$onInit = function () {
      vm.user = {type: 1};
    };

    this.doRegister = function (user) {
      $log.debug(user);
    }
  }


  angular.module('myApp').component('register', {
    templateUrl: 'js/components/register/register.html',
    controller: registerController
  });

})();

