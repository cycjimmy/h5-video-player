var
  path = require('path')
  , gulp = require('gulp')
  , gulpCopy = require('gulp-copy')
  , webserver = require('gulp-webserver')
  , ghPages = require('gulp-gh-pages')
;


// copy
gulp.task('copy', function () {
  var
    sourceFiles = path.resolve('dist', 'H5VideoPlayer.min.js')
    , destination = path.resolve('demo')
  ;

  return gulp
    .src(sourceFiles)
    .pipe(gulpCopy(destination, {
      prefix: 1
    }));
});

// server
gulp.task('server', function () {
  return gulp
    .src('demo')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Deploy to ghPages
gulp.task('deploy', function () {
  return gulp
    .src('demo/**/*')
    .pipe(ghPages());
});

