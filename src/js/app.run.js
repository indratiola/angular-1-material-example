angular.module('myApp').run(function ($rootScope, $state, $log) {

  /**
   * Always redirect user first page
   */
  $state.transitionTo('login');

  $log.debug('Debug: app run');


});
