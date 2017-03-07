/**
 * Created by Antonio on 06/03/2017.
 */

var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('GenerateJS', function() {
  var tsResult = tsProject.src() // instead of gulp.src(...)
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('public'));
});