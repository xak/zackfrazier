var version = '1.0.1';

// load node modules/plugins
var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var path = require('path');
var express = require('express');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var minimist = require('minimist');
var runSequence = require('run-sequence');
var reactify = require('reactify');

var $ = require('gulp-load-plugins')();
var server;
var options = minimist(process.argv);
var environment = options.environment || 'development';

var distTarget = 'dist/' + (environment === 'production' ? version : 'dev') + '/';

gulp.task('clean', function (done) {
	del([distTarget], done);
});

// process static files
gulp.task('public', function() {
	return gulp.src('public/**/*')
		.pipe(gulp.dest(distTarget));
});

// process images
gulp.task('images', function() {
	gulp.src('src/img/**/*')
		.pipe($.imagemin())
		.pipe(gulp.dest(distTarget + 'img'))
		.pipe(reload());
});

// process html
gulp.task('html', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest(distTarget))
		.pipe(reload());
});

//process styles
gulp.task('styles', ['vendorcss'], function() {
	return gulp.src('src/css/app.less')
		.pipe($.plumber())
		.pipe(environment === 'development' ? $.sourcemaps.init() : $.util.noop())
		.pipe($.less({
			paths: [ path.join(__dirname, 'src/css/includes') ]
		})).on('error', handleError)
		.pipe(environment === 'development' ? $.sourcemaps.write() : $.util.noop())
		.pipe($.concat('zackfrazier.css'))
		.pipe(environment === 'production' ? $.minifyCss() : $.util.noop())
		.pipe(gulp.dest(distTarget + 'css/'))
		.pipe(reload());
});

//process vendor styles
var bowerPaths = {
	bowerDirectory: 'src/bower_components',
	bowerrc: '.bowerrc',
	bowerJson: 'bower.json'
};
gulp.task('vendorcss', function() {
	return gulp.src(bowerPaths.bowerDirectory + '/pure/grids.css')
		.pipe($.concat('vendor.css'))
		.pipe($.minifyCss())
		.pipe(gulp.dest(distTarget + 'css/'));
});

//process scripts
gulp.task('scripts', function(){
  var b = browserify({
  	debug: environment === 'development'	
  });
  b.transform(reactify); // use the reactify transform
  b.add('./src/js/app.js');
  return b.bundle().on('error', handleError)
    .pipe(source('zackfrazier.js'))
		.pipe(environment === 'production' ? $.buffer() : $.util.noop())
		.pipe(environment === 'production' ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(distTarget + 'js'))
    .pipe(reload());
});
gulp.task('vendorjs', function() {
	return gulp.src(bowerPaths.bowerDirectory + '/react/react-with-addons.min.js')
		.pipe($.concat('vendor.js'))
		.pipe(gulp.dest(distTarget + 'js/'));
});


gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/css/**/*.less', ['styles']);
});

gulp.task('server', function() {
  server = express();
  server.use(express.static(distTarget));
  server.listen(8000);
  browserSync({ proxy: 'localhost:8000' });
});

gulp.task('build', function (done) {
  runSequence('clean', 'public', 'images', 'styles', 'scripts', 'html', function () {
  	done();
  	console.log('zackfrazier ' + environment + ' v' + version + ' build is complete.')
  });
});

gulp.task('default', function (done) {
  runSequence('build', 'watch', 'server', function () {
  	done();
  	console.log('zackfrazier v' + version + ' is running.')
  });
});

 

function reload() {
  if (server) {
    return browserSync.reload({ stream: true });
  }
  return $.util.noop();
}
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

