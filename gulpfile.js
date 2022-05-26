const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

function sassCompiler(done) {
	src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		// .pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(dest('./dist/css'))
	done()
}

exports.sassCompiler = sassCompiler

// gulp.task('default', function () {
//     return gulp.
// });
