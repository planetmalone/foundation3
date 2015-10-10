var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(compass({
            css: 'css',
            sass: 'scss'
        }))
        .pipe(gulp.dest('css'))
        .pipe(rename({ suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass']);