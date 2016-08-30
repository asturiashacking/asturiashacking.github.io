var gulp = require('gulp');
var postcss = require('gulp-postcss');
var importer = require('postcss-import')
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

gulp.task('css', function() {
  var processors = [
    importer(),
    cssnext(),
    cssnano()
  ];

  return gulp.src('./_css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function() {
  return gulp.watch('./_css/**/*.css', ['css']);
});
