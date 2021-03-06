var version = '1.0.4';

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
var config = require('./config/' + environment + '.json');
var cachebust = new $.cachebust();

var distTarget = 'dist/' + (environment === 'production' ? version : 'dev') + '/';
var dropbox = '/Users/z/Dropbox/Public/';

gulp.task('clean', function (done) {
	if (environment !== 'production') {
		del([distTarget], done);
	} else {
		done();
	}
});

// process static files
gulp.task('public', ['resume'], function() {
	return gulp.src('public/**/*')
		.pipe(gulp.dest(distTarget));
});
gulp.task('resume', function() {
	return gulp.src('public/*.pdf')
		.pipe(environment === 'production' ? gulp.dest(dropbox) : $.util.noop());
});

// process images
gulp.task('images', function() {
	gulp.src('src/img/**/*')
		.pipe($.imagemin())
		.pipe(environment === 'production' ? cachebust.resources() : $.util.noop())
		.pipe(gulp.dest(distTarget + 'img'))
		.pipe(reload());
});

// process html
gulp.task('html', function() {
	return gulp.src('src/**/*.html')
		.pipe(environment === 'production' ? cachebust.references() : $.util.noop())	
		.pipe(gulp.dest(distTarget))
		.pipe(reload());
});

//process styles
gulp.task('styles', ['vendorcss'], function() {
	return gulp.src('src/css/app.less')
		.pipe($.plumber())
		.pipe(config.minify ? $.sourcemaps.init() : $.util.noop())
		.pipe($.less({
			paths: [ path.join(__dirname, 'src/css/includes') ]
		})).on('error', handleError)
		.pipe(config.minify ? $.sourcemaps.write() : $.util.noop())
		.pipe($.concat('zackfrazier.css'))
		.pipe(config.minify ? cachebust.references() : $.util.noop())
		.pipe(config.minify ? cachebust.resources() : $.util.noop())
		.pipe($.autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
		}))
		.pipe(config.minify ? $.minifyCss() : $.util.noop())
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
	return gulp.src(bowerPaths.bowerDirectory + '/animatecss/animate.min.css')
		.pipe($.concat('vendor.css'))
		.pipe(config.minify ? cachebust.resources() : $.util.noop())
		.pipe($.minifyCss())
		.pipe(gulp.dest(distTarget + 'css/'));
});

//process scripts
gulp.task('scripts', ['vendorjs'], function(){
  var b = browserify({
  	debug: config.minify	
  });
  b.transform(reactify); // use the reactify transform
  b.add('./src/js/app.js');
  return b.bundle().on('error', handleError)
    .pipe(source('zackfrazier.js'))
		.pipe(config.minify ? $.buffer() : $.util.noop())
		.pipe(config.minify ? $.uglify() : $.util.noop())
		.pipe(config.minify ? cachebust.resources() : $.util.noop())
    .pipe(gulp.dest(distTarget + 'js'))
    .pipe(reload());
});
gulp.task('vendorjs', function() {
	return gulp.src([ 
		//bowerPaths.bowerDirectory + '/react/react-with-addons.min.js', 
		bowerPaths.bowerDirectory + '/parse/parse.min.js'
	])
		.pipe($.concat('vendor.js'))
		.pipe(config.minify ? cachebust.resources() : $.util.noop())
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

gulp.task('deploy', ['build'], function () {
	var opts = {
		host: 'zackfrazier.com',
		auth: 'keyMain',
		remotePath: 'zackfrazier.com/'
	}
	return gulp.src(['dist/' + version +'/**/*'])
		.pipe($.size())
		.pipe(environment === 'production' ? $.sftp(opts) : $.util.noop());
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

