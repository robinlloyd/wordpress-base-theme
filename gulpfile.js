var gulp = require('gulp'),
    sass = require('gulp-sass'),

    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var env = process.env.NODE_ENV || 'development';


// Sass
// ==============================================
gulp.task('sass', function() {
  return gulp.src('assets/sass/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});


// Watch
// ==============================================
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch('assets/sass/**/*.scss', ['sass']);

  gulp.watch('**/*.php').on('change', function(file) {
    livereload.changed(file.path);
  });
});


// Gulp default
// ==============================================
gulp.task('default', ['sass', 'watch']);
