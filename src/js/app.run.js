angular.module('myApp').run(function ($rootScope, $location, $log) {

  /**
   * Always redirect user to home page
   */
  $location.path('/products');

  $log.debug('Debug: app run');


});
