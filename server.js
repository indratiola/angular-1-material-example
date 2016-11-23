(function () {
  'use strict';

  var browserSync = require('browser-sync').create();

  // @ref http://www.browsersync.io/docs/options/
  browserSync.init({
    server: {
      baseDir: './src',
      index: 'index.html',
      directory: false,
      routes: {
        //If you are using bower or npm
        '/bower_components': 'bower_components',
        '/node_modules': 'node_modules'

      }
    },
    files: './src',
    notify: false,
    online: false,
    reloadOnRestart: true,
    logFileChanges: true,
    ghostMode: false
    // browser: ["google chrome", "firefox"]
  });

})();
