(function () {
  'use strict';

  function profileController($log, $mdToast) {
    var vm = this;

    this.$onInit = function () {
      vm.user = {name: 'John Doe', email: 'johndoe@example.com'};
      vm.password = {old: '', new: '', retype: ''};
    };

    this.updateProfile = function (user) {
      $log.debug(user);
      $mdToast.show(
          $mdToast.simple()
              .textContent('Profile was updated')
              .position('top right')
              .hideDelay(3000)
      );
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

