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
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
//var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var del = require('del');
var mainBowerFiles = require('main-bower-files');
 
var reload      = browsersync.reload;

var paths = {
	styles: 	['src/css/style.css'],
  scripts: 	['src/js/main.js', 'src/js/**/*.js', '!src/js/zackfrazier.js'],
  bower: {
  	bowerDirectory: 'src/bower_components',
    bowerrc: '.bowerrc',
    bowerJson: 'bower.json'
  },
  images: 	['src/img/**/*']
};

gulp.task('clean', function (cb) {
     del(['dist'], cb);
});


// Copy Static Public Files
gulp.task('public', function() {
    return gulp.src('public/**/*')
        .pipe(gulp.dest('dist/'));
});

// Process HTML
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
});
gulp.task('html-watch', ['html'], browsersync.reload);

// Process Images
gulp.task('img', function() {
  gulp.src('src/img/**/*')
  	.pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Process Styles
gulp.task('css-dev', function() {
    return gulp.src(paths.styles)
		    .pipe(plumber())
        .pipe(concat('zackfrazier.css'))
        .pipe(myth())
        .pipe(gulp.dest('src/css/'));
});
gulp.task('css', function(cb) {
    return gulp.src(paths.styles)
        .pipe(plumber())
        .pipe(concat('zackfrazier.css'))
        .pipe(myth())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('vendor', function() {
    return gulp.src(mainBowerFiles({ paths: paths.bower }))
    		.pipe(concat('vendor.css'))
  	    .pipe(minifycss())
			  .pipe(gulp.dest('dist/css/'));
});
/*
gulp.task('sass', function () {
    gulp.src('./src/css/*.scss')
        .pipe(sass({ includePaths : ['./src/css/'], outputStyle : 'compressed' }))
        .pipe(gulp.dest('./src/css'));
});
*/
gulp.task('css-watch', ['css'], browsersync.reload);



// Process Scripts
gulp.task('js-dev', function() {
    return gulp.src(paths.scripts)
        .pipe(plumber())
        .pipe(concat('zackfrazier.js'))
        .pipe(gulp.dest('src/js/'));
});


gulp.task('js', function() {
    return gulp.src(paths.scripts)
    		.pipe(plumber())
    		.pipe(jshint())
    		.pipe(jshint.reporter('default'))
        .pipe(concat('zackfrazier.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});
gulp.task('js-watch', ['js'], browsersync.reload);
/*
gulp.task('browserify', function() {
	return browserify('./src/js/app.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./src/js/'))
});
*/

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['html-watch']);
  gulp.watch('src/js/*.js', ['js-watch']);
  gulp.watch('src/css/*.css', ['css-watch']);
	console.log('now watching html, css, and js.')
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
            baseDir:'dist'
        }
    }, cb);
});


// Build Task

gulp.task('build', ['public', 'vendor', 'img', 'html', 'js', 'css'], function (cb) {
  console.log('zackfrazier build is complete.')
});

// Default Task
gulp.task('default', ['browsersync', 'watch'], function () {
  console.log('zackfrazier is running.')
});
