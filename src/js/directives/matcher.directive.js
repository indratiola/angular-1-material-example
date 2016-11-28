(function () {

  /**
   * Check if two models are equals and set input validity
   * Usage:
   *  <input type="password ng-model="password">
   *  <input type="password ng-model="retypePassword" ap-matcher="{{password}}">
   *
   */
  function matchDirective() {

    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attributes, ngModel) {

        ngModel.$validators.matcher = function (modelValue) {
          //Notice that apMatcher is the directive in next line
          return attributes.apMatcher === modelValue;
        };

      }
    };
  }

  /**
   * Note: directives prefixed with ap
   */
  angular.module('myApp').directive('apMatcher', matchDirective)
})();
