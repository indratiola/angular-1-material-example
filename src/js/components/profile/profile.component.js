(function () {
  'use strict';

  function profileController() {
    var vm = this;

    this.$onInit = function () {
      vm.message = 'test';
    }
  }


  angular.module('myApp').component('profile', {
    templateUrl: 'views/home.html',
    controller: profileController
  });

})();

