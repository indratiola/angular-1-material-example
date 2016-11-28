(function () {

  /**
   * Take user to previous state
   * Usage:
   * <md-button ap-go-back>Previous Page</md-button>
   */
  function goBackDirective($window) {

    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.on('click', goBack);

        // Clean up memory leaks
        scope.$on('$destroy', function () {
          elem.off('click', goBack);
        });

        function goBack() {
          $window.history.back();
        }
      }
    }
  }

  /**
   * Note: directives prefixed with ap
   */
  angular.module('myApp').directive('apGoBack', goBackDirective)
})();
