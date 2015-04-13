// Load Node Modules/Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// gulp.task(name, function() {
//   return gulp.src(path)
//     .pipe(plugin)
//     .pipe(plugin)
//     .pipe(gulp.dest(path));
// });

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
    .pipe(gulp.dest('./dist/img'));
});


// Process Styles
gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('zackfrazier.css'))
        .pipe(gulp.dest('./dist/css/'));
});

// Process Scripts
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('zackfrazier.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

// Default Task
gulp.task('default', ['public', 'html', 'img', 'css', 'js'], function () {
  gulp.watch('./src/*.html',['html']);
  gulp.watch('./src/js/*.js',['js']);
  gulp.watch('./src/css/*.css'['css']);
});