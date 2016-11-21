angular.module('myApp').config(function ($stateProvider) {
  'use strict';

  var states = [
    {
      name: 'products',
      url: '/products',
      component: 'products'
    },
    {
      name: 'profile',
      url: '/profile',
      component: 'profile',
      resolve: {
        hello: function () {
          return {message: 'Resolved profile'}
        }
      }
    }
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });

});
