angular.module('myApp').config(function ($stateProvider) {
  'use strict';

  var states = [
    {
      name: 'login',
      url: '/login',
      component: 'login'
    },
    {
      name: 'register',
      url: '/register',
      component: 'register'
    },
    {
      name: 'products',
      url: '/products',
      component: 'products'
    },
    {
      name: 'cart',
      url: '/cart',
      component: 'cart'
    },
    {
      name: 'purchases',
      url: '/purchases',
      component: 'purchases'
    },
    {
      name: 'profile',
      url: '/profile',
      component: 'profile'
    }
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });

});
