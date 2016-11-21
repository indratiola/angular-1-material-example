(function (angular) {
  'use strict';

  var app = angular
    .module('myApp', [
      'ngMaterial'
    ]);

  app.config(function ($mdThemingProvider, $mdAriaProvider) {
    /**
     * https://material.angularjs.org/latest/Theming/03_configuring_a_theme
     */
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('red');


    // Globally disables all ARIA warnings.
    $mdAriaProvider.disableWarnings();


  });

  app.run(function ($log) {
    $log.debug('App is running');
  });

  app.controller('AppController', function ($mdSidenav) {

    this.toggleSideNav = function () {
      $mdSidenav('left-nav').toggle();
    }
  });

})(angular);
