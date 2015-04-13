// Load Node Modules/Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var myth = require('gulp-myth');
var imagemin = require('gulp-imagemin');
var connect = require('connect');
var serve = require('serve-static');

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

// Process Images
gulp.task('img', function() {
  gulp.src('./src/img/**/*')
  	.pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});


// Process Styles
gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('zackfrazier.css'))
        .pipe(myth())
        .pipe(gulp.dest('./dist/css/'));
});

// Process Scripts
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    		.pipe(jshint())
    		.pipe(jshint.reporter('default'))
        .pipe(concat('zackfrazier.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.html',['html']);
  gulp.watch('./src/js/*.js',['js']);
  gulp.watch('./src/css/*.css',['css']);
});


// Static Server
gulp.task('server', function() {
  return connect().use(serve(__dirname))
    .listen(8899)
    .on('listening', function() {
      console.log('Server Running: View at http://localhost:8899');
      });
});



// Default Task
gulp.task('default', ['public', 'img', 'html', 'css', 'js', 'server', 'watch'], function () {
 console.log('zackfrazier build is complete.')
 console.log('now watching html, css, and js.')
});