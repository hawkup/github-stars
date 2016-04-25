var gulp = require('gulp');
var paths = require('./gulp.config.json');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var htmlmin = require('gulp-htmlmin');
var template = require('gulp-template');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  var watchfile = [].concat(paths.buildfolder + paths.buildjsname, paths.buildfolder + paths.buildcssname);
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 4200
  });

  gulp.watch(watchfile).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(paths.buildcssname))
    .pipe(gulp.dest(paths.buildfolder));
});

gulp.task('templatecache', function () {
  return gulp.src(paths.htmltemplates)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(templateCache(paths.buildtemplatename, {
      module: 'app.core',
      standalone: false,
      root: 'app/'
    }))
    .pipe(gulp.dest(paths.buildfolder));
});

gulp.task('compress', ['templatecache'], function () {
  var source = [].concat(paths.vendorjs, paths.js, paths.ignorejs, paths.buildfolder + paths.buildtemplatename);
  return gulp.src(source)
    .pipe(ngAnnotate())
    .pipe(uglify({mangle: true}))
    .pipe(concat(paths.buildjsname))
    .pipe(gulp.dest(paths.buildfolder));
});

gulp.task('copy', function () {
  return gulp.src('./bower_components/angular-mocks/angular-mocks.js', {base: './bower_components/angular-mocks/'})
    .pipe(gulp.dest(paths.buildfolder));
})

gulp.task('build', ['compress', 'copy'], function () {
  return gulp.src('./index.html')
    .pipe(template({
      script: '<script src="angular-mocks.js"></script>'
    }))
    .pipe(gulp.dest(paths.buildfolder));
});

gulp.task('watch', function () {
  var jssource = [].concat(paths.js, paths.ignorejs, paths.htmltemplates)
  gulp.watch(jssource, ['compress']);
  gulp.watch(paths.scss, ['sass']);
});
