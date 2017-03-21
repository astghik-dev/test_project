'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./dev/sass/**/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./dev/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('default', function () {
    gulp.watch('./dev/sass/*.scss', ['sass']);
    gulp.watch('./dev/js/*.js', ['js']);
});

