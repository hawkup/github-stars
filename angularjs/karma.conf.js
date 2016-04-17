var paths = require('./gulp.config.json');

module.exports = function (config) {
  var source = [].concat(paths.vendorjs)
              .concat(paths.test)
              .concat(paths.js);
  config.set({
    basePath: './',
    files: [
      './bower_components/angular/angular.min.js',
      './bower_components/angular-ui-router/release/angular-ui-router.min.js',
      './bower_components/angular-permission/dist/angular-permission.js',
      './bower_components/satellizer/satellizer.min.js',
      './bower_components/angular-mocks/angular-mocks.js',
      'app/**/*module*.js',
      'app/**/*.js'
    ],
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    colors: true,
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai-plugins',
      'karma-mocha-reporter',
      'karma-coverage'
    ],
    preprocessors: {
      'app/**/*.js': ['coverage']
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  })
}
