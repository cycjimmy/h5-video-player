var
  path = require('path')
  , gulp = require('gulp')
  , gulpCopy = require('gulp-copy')
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

// Deploy to ghPages
gulp.task('deploy', function () {
  return gulp
    .src(['dist/**/*', '!dist/**/*.map'])
    .pipe(ghPages());
});

