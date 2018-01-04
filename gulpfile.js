var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var changed = require('gulp-changed');
// var pump = require('pump');

var src = ['./js/vue.min.js','./js/vue-router.js','./js/AV.analytics.js','./js/global.js','./js/route.js'];

gulp.task('js', function() {
	return	gulp.src(src)
  			.pipe(concat('main.js'))
  			.pipe(uglify())
  			.pipe(gulp.dest('./js'));
});