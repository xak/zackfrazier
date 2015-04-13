// Load Node Modules/Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var myth = require('gulp-myth');
var imagemin = require('gulp-imagemin');
var connect = require('connect');
var serve = require('serve-static');
var browsersync = require('browser-sync');
var minifycss = require('gulp-minify-css');

var reload      = browsersync.reload;


// Copy Static Public Files
gulp.task('public', function() {
    return gulp.src('./public/**/*')
        .pipe(gulp.dest('./dist/'));
});

// Process HTML
gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'));
});
gulp.task('html-watch', ['html'], browsersync.reload);

// Process Images
gulp.task('img', function() {
  gulp.src('./src/img/**/*')
  	.pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

// Process Styles
gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(concat('zackfrazier.css'))
        .pipe(myth())
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css/'));
});
gulp.task('css-watch', ['css'], browsersync.reload);



// Process Scripts
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
    		.pipe(jshint())
    		.pipe(jshint.reporter('default'))
        .pipe(concat('zackfrazier.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});
gulp.task('js-watch', ['js'], browsersync.reload);

gulp.task('watch', function() {
  gulp.watch('./src/*.html', ['html-watch']);
  gulp.watch('./src/js/*.js', ['js-watch']);
  gulp.watch('./src/css/*.css', ['css-watch']);
});


// Static Server
gulp.task('server', function() {
  return connect().use(serve(__dirname))
    .listen(8899)
    .on('listening', function() {
      console.log('Server Running: View at http://localhost:8899');
      });
});

// Browser Sync
gulp.task('browsersync', function(cb) {
    return browsersync({
        server: {
            baseDir:'./dist'
        }
    }, cb);
});


// Build Task
/*
TO DO: separate dev and build processes

gulp.task('build', ['public', 'img', 'html', 'css', 'js'], function () {
 console.log('zackfrazier build is complete.')
});
*/

// Default Task
gulp.task('default', ['public', 'img', 'html', 'css', 'js', 'browsersync', 'watch'], function () {
 console.log('now watching html, css, and js.')
});
/*
gulp.task('default', ['public', 'img', 'html', 'css', 'js', 'server', 'watch'], function () {
 console.log('zackfrazier build is complete.')
 console.log('now watching html, css, and js.')
});
*/