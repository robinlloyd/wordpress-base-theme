var gulp = require('gulp'),
    sass = require('gulp-sass'),

    del = require('del'),

    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),

    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var distDir = './dist';

// Clean
// ==============================================
gulp.task('clean', function(cb) {
  del([distDir], cb);
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
