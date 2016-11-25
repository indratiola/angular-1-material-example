(function () {
  'use strict';

  function profileController($log) {
    var vm = this;

    this.$onInit = function () {
      vm.user = {};
      vm.password = {};
    };

    this.updateProfile = function (user) {
      $log.debug(user);
    };

    this.changePassword = function (form) {
      $log.debug(form);
    };
  }


  angular.module('myApp').component('profile', {
    templateUrl: 'js/components/profile/profile.html',
    controller: profileController
  });

})();

