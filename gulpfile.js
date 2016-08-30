var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var importer = require('postcss-import')

gulp.task('css', function() {
  var processors = [
    importer(),
    autoprefixer(),
    cssnano(),
  ];

  return gulp.src('./_css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function() {
  return gulp.watch('./_css/**/*.css', ['css']);
});
