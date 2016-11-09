var version = '2.0.0';

require('events').EventEmitter.defaultMaxListeners = 0;

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const del = require('del');
const nunjucks = require('gulp-nunjucks-html');
const path = require('path');
const yargs = require('yargs');
const cachebust = new $.cachebust();

const PRODUCTION = !!(yargs.argv.production);

const src = {
  path: 'src/',
  data: 'data/',
  public: 'public/**/*',
  scripts: 'src/js/**/*',
  images: 'src/img/**/*',
  styles: 'src/css/',
  bower: 'bower_components/',
  fonts: 'src/fonts',
  html: 'src/html/**/*.html',
  layouts: 'src/html/tmpls/',
  includes: 'src/html/incl/',
  macros: 'src/html/incl/'
}

const dist_versioned = 'dist/' + (PRODUCTION ? version : 'dev');

const dist = {
  path: dist_versioned,
  data: dist_versioned + '/api',
  scripts: dist_versioned + '/js',
  images: dist_versioned + '/img',
  styles: dist_versioned + '/css',
  fonts: dist_versioned + '/fonts',
  html: dist_versioned + '/'
}

// environment setup
var server;
const date = new Date();

//data
const app = require('./' + src.data + 'app.json');

// helpers

// get key from file name, e.g. index.html returns index
function getPageKey(file) {
  var filePath = path.basename(file.path);
  return filePath.replace(/\.[^/.]+$/, "");
}
var getAppData = function(file) {
  try {
    //set menu states
//     var selectedId = getPageKey(file);
//     app.menu.forEach(function (obj) {
//       obj.selected = obj.id === selectedId || selectedId.indexOf(obj.id) !== -1;
//     });
    return { app: app };
  } catch(err) {
    console.log(err.message);
  }
  return { app: {} };
};
var getPageData = function(file) {
  try {
    var key = getPageKey(file);
    var page = require('./' + src.data + key + '.json');
    page.id = key;
    return { page: page };
  } catch(err) {
    console.log(err.message);
  }
  return { page: {} };
};

//TASK RUNNERS
gulp.task('serve', ['build'], function () {
  server = browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [dist.path]
    }
  });
  gulp.watch(src.html, ['html']);
  gulp.watch(src.styles + '**/*', ['css']);
  gulp.watch(src.scripts + '**/*', ['js']);
});

// build static HTML files
gulp.task('html', function () {
  return gulp.src([src.html, '!'+src.includes+'*', '!'+src.layouts+'*', '!'+src.macros+'*'])
    .pipe($.data(getAppData))
    .pipe($.data(getPageData))
    .pipe(nunjucks({
      searchPaths: [src.layouts, src.includes, src.macros],
      locals: {
        date: date,
        env: PRODUCTION ? 'production' : 'development'
      }
    }))
		.pipe($.if(PRODUCTION, $.htmlmin({collapseWhitespace: true})))
		.pipe($.if(PRODUCTION, cachebust.references()))
    .pipe(gulp.dest(dist.path))
    .pipe(reload())
});


// gulp.task('html-imgcache', function () {
//   return gulp.src(dist.html + '**/*.html')
// 		.pipe($.if(PRODUCTION, cachebust.references()))
//     .pipe(gulp.dest(dist.path))
// });

// process and transpile JS
gulp.task('js', function() {
  return gulp.src(src.scripts + 'app.js')
    .pipe($.include())
      .on('error', console.log)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.if(PRODUCTION, $.uglify()))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe($.if(PRODUCTION, cachebust.resources()))
		.pipe(gulp.dest(dist.scripts))
		.pipe(reload());
});

// process SASS
gulp.task('css', function () {
  return gulp.src([src.styles + '*.scss', '!'+ src.styles + 'debug.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: (PRODUCTION?'compressed':'expanded'),
      precision: 10,
      includePaths: [src.styles],
      errLogToConsole: true
    })
    .on('error', $.sass.logError))
		.pipe($.if(PRODUCTION, cachebust.references()))
		.pipe($.if(PRODUCTION, cachebust.resources()))
    .pipe($.if(PRODUCTION, $.cssnano()))
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
    ]))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(dist.styles))
    .pipe(reload());
});

// process images
gulp.task('images', function() {
	gulp.src(src.images)
//		.pipe($.if(PRODUCTION, cachebust.resources()))
		.pipe(gulp.dest(dist.images))
});

gulp.task('imagemin', () =>
	gulp.src(dist.images + '/**/*')
		.pipe($.imagemin({
			plugins: [$.imagemin.svgo({
				cleanupIDs: true, removeTitle: true
			})]
		}))
		.pipe(gulp.dest(dist.images))
);


// copy JSON files
gulp.task('data', function() {
  return gulp.src(src.data+'**/*.json')
	  .pipe(gulp.dest(dist.data));
});

//gulp.task('clean', del.bind(null, [dist.path]));
gulp.task('clean', function (done) {
	if (PRODUCTION) {
		del([dist.path], done);
	} else {
		done();
	}
});

// process static files (for favicon.ico, touch icons, etc.)
gulp.task('public', function() {
  return gulp.src(src.public)
	  .pipe(gulp.dest(dist.path));
});



//build
gulp.task('build', $.sequence('clean','public','images','css','js','html'));


gulp.task('default', function () {
  gulp.start('serve');
});



//FIRST: gulp build --production
//SECOND: gulp imagemin
gulp.task('deploy', function () {
	var opts = {
		host: 'zackfrazier.com',
		auth: 'keyMain',
		remotePath: 'zackfrazier.com/'
	}
	return gulp.src([dist.path +'/**/*'])
		.pipe($.size())
    .pipe($.if(PRODUCTION, $.sftp(opts)))
});
 


function reload() {
  if (server) {
    return browserSync.reload({ stream: true });
  }
  return $.util.noop();
}