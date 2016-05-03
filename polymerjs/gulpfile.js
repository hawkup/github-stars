var gulp = require('gulp');
var browserSync = require('browser-sync');
var vulcanize = require('gulp-vulcanize');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('copy', function () {
  return gulp.src('./app/index.html', {base: './app/'})
    .pipe(gulp.dest('./dist/'));
});

gulp.task('compress', function () {
  return gulp.src('./app/bower_components/webcomponentsjs/webcomponents-lite.min.js')
    .pipe(uglify({mangle: true}))
    .pipe(concat('_polymer.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('vulcanize', function () {
  return gulp.src('app/elements/my-app.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineCss: true,
      inlineScripts: true
    }))
    .pipe(concat('_polymer.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['copy', 'compress', 'vulcanize']);

gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: './dist',
    port: 4200
  });

  gulp.watch('app/elements/**/*.html', ['vulcanize']);
  gulp.watch('app/index.html', ['copy']);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});
