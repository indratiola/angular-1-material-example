/**
 * Make Underscore a module
 * @link http://underscorejs.org/
 * @link http://stackoverflow.com/questions/14968297/use-underscore-inside-angular-controllers
 */
angular.module('underscore', []).factory('_', function ($window) {
  return $window._;
});


