(function () {
  'use strict';

  var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

  var paths = {
    src: {
      baseDir: './src',
      css: './src/css/**/*.css',
      html: './src/**/*.html',
      js: './src/js/**/*.js',
      img: './src/img/**/*.{png,jpg,jpeg,gif,svg}'
    }
  };


  /**
   * If you want to make browserSync online run this command
   * gulp --online
   * @type {boolean}
   */
  var isOnline = (process.argv.slice(2)[1] == '--online');

  /**
   * Gulp default task for browserSync
   * @ref http://www.browsersync.io/docs/options/
   * @more https://github.com/BrowserSync/recipes
   */
  gulp.task('serve', function () {
    browserSync.init({
      server: {
        baseDir: paths.src.baseDir,
        index: 'index.html',
        directory: false,
        routes: {
          //If you are using bower or npm
          '/bower_components': 'bower_components',
          '/node_modules': 'node_modules'

        }
      },
      files: [
        paths.src.css,
        paths.src.html,
        paths.src.js
      ],
      notify: false,
      online: isOnline,
      reloadOnRestart: true,
      logFileChanges: true,
      ghostMode: false
      // browser: ["google chrome", "firefox"]
    });
  });


})();
