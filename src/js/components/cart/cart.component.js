(function () {
  'use strict';

  function cartController($mdSidenav, $mdDialog, $mdToast) {
    var vm = this;

    this.$onInit = function () {
      vm.items = [];
    };

    this.openSideNav = function () {
      $mdSidenav('sidenav-left').open();
    };

    this.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    this.confirmDelete = function (ev) {

      var confirm = $mdDialog.confirm()
        .title('Are you sure to delete ?')
        .textContent('This item will be removed from cart')
        .ariaLabel('Confirm')
        .targetEvent(ev)
        .ok('Delete')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function () {
        //do something when yes

        $mdToast.show(
          $mdToast.simple()
            .textContent('Item was deleted')
            .position('top right')
            .hideDelay(5000)
        );
      }, function () {

        //do something when no
      });
    };
  }


  angular.module('myApp').component('cart', {
    templateUrl: 'js/components/cart/cart.html',
    controller: cartController
  });

})();

