'use strict';

var gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      maps = require('gulp-sourcemaps'),
      sass = require('gulp-sass'),
      del = require('del'),
      gulpif = require('gulp-if'),
      useref = require('gulp-useref'),
      minifyCss = require('gulp-minify-css') ;

var options = {
    src: 'src',
    dist: 'dist'
};

gulp.task("compileSass", function() {
  return gulp.src(options.src + "/scss/main.scss")
          .pipe(maps.init())
          .pipe(sass())
          .pipe(maps.write('./'))
          .pipe(gulp.dest(options.src + '/css'));
});

gulp.task('watch', function() {
  gulp.watch(options.src + '/scss/**/*.scss', ['compileSass']);
});

gulp.task('clean', function() {
  del(['dist', 'css/main.css*', 'js/app*.js*']);
});

gulp.task('html', function () {
    return gulp.src(options.src + '/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest(options.dist));
});

gulp.task("build", ['html'], function () {
  return gulp.src(["css/main.css", "js/app.min.js", "index.html", "img/**"], { base: './'})
          .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watch']);

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
