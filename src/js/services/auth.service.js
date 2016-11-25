(function () {
  'use strict';

  function AuthService($http, $log, WEB_SERVICE) {

    var url = WEB_SERVICE.url;

    return {
      token: function () {
        return $http.get(url + 'token');
      },
      login: function (data) {
        return $http.post(url + 'login', data);
      },
      register: function (data) {
        return $http.post(url + 'register', data);
      }
    }

  }

  angular.module('myApp').factory('AuthService', AuthService);
})();
