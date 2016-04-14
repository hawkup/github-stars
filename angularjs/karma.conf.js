var paths = require('./gulp.config.json');

module.exports = function (config) {
  var source = [].concat(paths.vendorjs)
              .concat(paths.js)
              .concat(paths.test);
  config.set({
    basePath: './',
    files: source,
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
