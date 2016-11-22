(function () {
  'use strict';

  function profileController() {
    var vm = this;

    this.$onInit = function () {
      vm.user = {};
    }
  }


  angular.module('myApp').component('profile', {
    templateUrl: 'js/components/profile/profile.html',
    controller: profileController
  });

})();

