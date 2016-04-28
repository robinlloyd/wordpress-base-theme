var gulp = require('gulp'),
    sass = require('gulp-sass'),

    clean = require('gulp-clean'),

    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),

    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var distDir = './dist';
var env = process.env.NODE_ENV || 'development';

// Clean
// ==============================================
gulp.task('clean', function() {
  return gulp.src(['.tmp', './dist'], { read: false })
    .pipe(clean());
});

// Sass
// ==============================================
gulp.task('sass', function() {
  return gulp.src('assets/sass/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});


gulp.task('usemin', function() {
  return gulp.src('./*.php')
    .pipe(usemin({
      css: [ rev() ]
    }))
    .pipe(gulp.dest(distDir));
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
gulp.task('default', ['clean', 'sass', 'watch']);

// Gulp build
// ==============================================
gulp.task('build', ['clean', 'sass', 'usemin']);
