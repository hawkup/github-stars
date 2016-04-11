var gulp = require('gulp');
var paths = require('./gulp.config.json');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress', function () {
  var source = [].concat(paths.vendorjs, paths.js);
  return gulp.src(source)
    .pipe(uglify({mangle: true}))
    .pipe(concat(paths.buildjsname))
    .pipe(gulp.dest(paths.buildfolder));
});

gulp.task('watch', function () {
  var source = [].concat(paths.js)
  gulp.watch(source, ['compress']);
});
