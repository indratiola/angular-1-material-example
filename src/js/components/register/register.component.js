(function () {
  'use strict';

  function registerController() {
    var vm = this;

    this.$onInit = function () {
      vm.message = 'test';
    }
  }


  angular.module('myApp').component('register', {
    templateUrl: 'views/home.html',
    controller: registerController
  });

})();

