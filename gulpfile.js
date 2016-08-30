var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('default', function() {
  var processors = [
    autoprefixer(),
    cssnano(),
  ];

  return gulp.src('./_css/**/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/css'));
});
