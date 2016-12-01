angular.module('myApp')
  .config(function ($httpProvider, $compileProvider, $locationProvider, $logProvider, $mdThemingProvider, $mdAriaProvider) {

    /**
     * Should disable (false) in production
     * @link https://code.angularjs.org/1.4.8/docs/guide/production
     */
    $compileProvider.debugInfoEnabled(true);

    /**
     * Should disable (false) logging ($log.debug()) in production
     * @link https://docs.angularjs.org/api/ng/provider/$logProvider
     */
    $logProvider.debugEnabled(true);


    // Tell server that request is ajax
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    /**
     * Speed up when multiple ajax calls
     * @link https://code.angularjs.org/1.4.8/docs/api/ng/provider/$httpProvider#useApplyAsync
     */
    $httpProvider.useApplyAsync(true);

    // Prefix #path with a custom symbol (!) !#path
    $locationProvider.hashPrefix('!');

    /**
     * @link https://material.angularjs.org/latest/Theming/03_configuring_a_theme
     */
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('red');

    // Globally disables all ARIA warnings.
    $mdAriaProvider.disableWarnings();

  });
