(function () {
  'use strict';

  function loginController() {
    var vm = this;

    this.$onInit = function () {
      vm.message = 'test';
    }
  }


  angular.module('myApp').component('login', {
    templateUrl: 'js/components/login/login.html',
    controller: loginController
  });

})();

