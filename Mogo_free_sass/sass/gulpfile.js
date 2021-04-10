var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const browserSync = require("browser-sync").create();


gulp.task('sass', function() {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', gutil.log))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('../css'))

});
gulp.task('watch', function() {
    gulp.watch('stylesheets/**/*.scss', gulp.series('sass'));
});