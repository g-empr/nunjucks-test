var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks-render');
var prettify = require('gulp-prettify');
var data = require('gulp-data');

var paths = {
  'nunjucks': {
    'srcRoot': './njk/src/',
    'src': './njk/src/main/**/*.njk',
    'dest': './njk/src/dist/',
  }
}
// 説明は後述
function getDataForFile(file) {
  return {
    file: file
  };
}

gulp.task('nunjucks', function () {
  gulp.src(paths.nunjucks.src)
    .pipe(data(getDataForFile)) // 
    .pipe(nunjucks({
      path: paths.nunjucks.srcRoot
    }))
    // 必要に応じて prettify とか beautify とか入れる
    .pipe(prettify({
      indent_size: 4,
      extra_liners: ''
    }))
    .pipe(gulp.dest(paths.nunjucks.dest));
});