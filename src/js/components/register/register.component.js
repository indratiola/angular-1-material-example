(function () {
  'use strict';

  function registerController() {
    var vm = this;

    this.$onInit = function () {
      vm.user = {};
    }
  }


  angular.module('myApp').component('register', {
    templateUrl: 'js/components/register/register.html',
    controller: registerController
  });

})();

