(function () {
  'use strict';

  /**
   * Global exception handler
   * Can be used send error reports back to server
   * @api https://docs.angularjs.org/api/ng/service/$exceptionHandler
   * @param $provide
   */
  function exceptionHandler($provide) {

    $provide.decorator('$exceptionHandler', function ($delegate, $log) {
      return function (exception, cause) {
        $log.debug('Application crashed :(');
        //You may want to disable this behaviour in production
        $delegate(exception, cause);
      };
    });

  }

  angular.module('myApp').config(exceptionHandler);
})();
