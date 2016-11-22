(function () {

  /**
   * Usage <md-button ap-go-back>Previous Page</md-button>
   */
  function goBackDirective($window) {

    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.bind('click', function () {
          $window.history.back();
        });
      }
    }
  }

  /**
   * Note: directives prefixed with ap
   */
  angular.module('myApp').directive('apGoBack', goBackDirective)
})();
