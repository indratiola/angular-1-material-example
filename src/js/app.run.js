angular.module('myApp').run(function ($rootScope, $state, $log, $mdDialog) {
  $log.debug('Debug: app run');

  /**
   * Always redirect user first page
   */
  $state.transitionTo('login');

  /**
   * Back button should close dialog
   * @link https://github.com/angular/material/issues/1978
   */
  $rootScope.$on('$locationChangeStart', function (event) {
    // Check if there is a dialog active
    if (angular.element(document).find('md-dialog').length > 0) {
      event.preventDefault(); // Prevent route from changing
      $mdDialog.cancel();  // Cancel the active dialog
    }
  })


});
