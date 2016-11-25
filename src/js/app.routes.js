angular.module('myApp').config(function ($stateProvider) {
  'use strict';

  var states = [
    {
      name: 'login',
      url: '/login',
      component: 'login'
    },
    {
      name: 'forget-password',
      url: '/forget-password',
      component: 'forgetPassword'
    },
    {
      name: 'register',
      url: '/register',
      component: 'register'
    },
    {
      name: 'products',
      url: '/products',
      template: '<products layout="column"></products>'
    },
    {
      name: 'cart',
      url: '/cart',
      template: '<cart layout="column"></cart>'
    },
    {
      name: 'payment',
      url: '/payment',
      template: '<payment layout="column"></payment>'
    },
    {
      name: 'purchases',
      url: '/purchases',
      template: '<purchases layout="column"></purchases>'
    },
    {
      name: 'profile',
      url: '/profile',
      template: '<profile layout="column"></profile>'
    }
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });

});
