const { watch, src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

function cssTask() {
  return src('./src/codebase/scss/codebase.scss', { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./src/dist'))
}

function cssTask2() {
  return src('./src/codebase/scss/codebase-l-d.scss', { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./src/dist'))
}

function jsTask() {
  return src('./src/codebase/js/activator.js', { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./src/dist'))
}

function watchFiles() {
  watch('./**/*.scss', parallel(cssTask));
  watch('./**/*.scss', parallel(cssTask2));
  watch('./**/*.js', parallel(jsTask));
};

exports.default = parallel(cssTask, cssTask2, jsTask, watchFiles);