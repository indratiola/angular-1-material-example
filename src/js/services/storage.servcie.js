(function () {
  'use strict';

  /**
   * LocalStorage service
   * @link https://developer.mozilla.org/en/docs/Web/API/Window/localStorage
   * @param $window
   * @returns {{set: set, get: get, remove: remove, clearAll: clearAll}}
   * @constructor
   */
  function StorageService($window) {

    var storage = $window.localStorage,
      prefix = '_app_';

    return {
      set: function (key, val) {
        storage.setItem(prefix + key, angular.toJson(val));
      },
      get: function (key) {
        var value = storage.getItem(prefix + key);
        return value && angular.fromJson(value);
      },
      remove: function (key) {
        storage.removeItem(prefix + key);
      },
      clearAll: function () {
        var keys = Object.keys(storage);
        for (var i = 0; i < keys.length; i += 1) {
          //If stored key has our prefix then remove this key
          if (keys[i].substr(0, prefix.length) === prefix) {
            storage.removeItem(keys[i]);
          }
        }
      }
    };

  }

  angular.module('myApp').factory('StorageService', StorageService);
})();
