var gulp = require('gulp');
var postcss = require('gulp-postcss');

//plugins
var cssnext = require('postcss-cssnext');
var pxtorem = require('postcss-pxtorem');
var svgFragments = require('postcss-svg-fragments');

// Styles Concat and Minify Tasks
gulp.task('styles', function(){
	var processors = [
		cssnext,
		pxtorem({
			rootValue: 10
		}),
		svgFragments
	];

	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dist'));
});


gulp.task('default', function() {
	gulp.watch('./src/*.css', ['styles']);
});