(function () {
  'use strict';
  /**
   * Application bootstrap file
   * Declare your module dependencies here
   */
  var app = angular
    .module('myApp', [
      'ui.router',
      'ngMaterial'
    ]);

  app.constant('WEB_SERVICE', {
    url: 'http://localhost:9000/api/v1/'
  });

})();
