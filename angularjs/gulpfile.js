var gulp = require('gulp');
var paths = require('./gulp.config.json');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var htmlmin = require('gulp-htmlmin');
var templateCache = require('gulp-angular-templatecache');

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
    .pipe(gulp.dest(paths.build));
});

gulp.task('compress', function () {
  var source = [].concat(paths.vendorjs, paths.js);
  return gulp.src(source)
    .pipe(ngAnnotate())
    .pipe(uglify({mangle: true}))
    .pipe(concat(paths.buildjsname))
    .pipe(gulp.dest(paths.buildfolder));
});

gulp.task('watch', function () {
  var source = [].concat(paths.js, paths.htmltemplates)
  gulp.watch(source, ['compress']);
});
