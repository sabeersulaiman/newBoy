"use strict"
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const useref = require('gulp-useref')
const cssnano = require('gulp-cssnano')
const gulpIf = require("gulp-if")
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")
const cache = require("gulp-cache")
const del = require("del")
const runSequence = require("run-sequence")
const webpack = require('gulp-webpack')
const babel = require('gulp-babel')


gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
})

const errorHandler = (err) => {
    console.dir(err)
    console.error(err.toString())
    this.emit('end')
}

gulp.task('useref', () => {
    return gulp.src("app/*.html")
        .pipe(useref().on('error', errorHandler))
        .pipe(gulp.dest('dist'))
})

gulp.task('useref-build', () => {
    return gulp.src("app/*.html")
        .pipe(useref().on('error', errorHandler))
        .pipe(gulpIf("*.js", uglify()))
        .pipe(gulpIf("*.css", cssnano()))
        .pipe(gulp.dest('dist'))
})

gulp.task("images", () => {
    return gulp.src("app/images/**/*")
        .pipe(gulp.dest('dist/images'))
})

gulp.task('fonts', () => {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', () => {
    return del.sync('dist')
})

gulp.task('cache:clear', (callback) => {
    return cache.clearAll(callback)
})

gulp.task('refresh', () => {
    runSequence('useref', browserSync.reload)
})

gulp.task('update', () => {
    runSequence('sass', 'useref', browserSync.reload)
})

gulp.task('watch', () => {
    gulp.watch("app/scss/**/*.scss", ['update'])
    // gulp.watch("app/css/**/*.css", ['refresh'])
    gulp.watch("app/js/**/*.js", ['refresh'])
    gulp.watch("app/src/**/*.js", ['webpack'])
    // gulp.watch("app/admin-src/**/*.js", ['webpack2'])
    gulp.watch("app/images/**/*", runSequence('images', 'refresh'))
    gulp.watch("app/*.html", ['refresh'])
})

gulp.task('browserSync', () => {
    // browserSync.init({
    //     server: {
    //         baseDir: 'app'
    //     }
    // })
    browserSync.init({
		proxy: "http://localhost:3000",
        port: 4000
	})
})

gulp.task('build', (callback) => {
    runSequence(
        //'clean:dist',
        'sass',
        'webpack',
        // 'webpack2',
        ['useref-build', 'images', 'fonts'],
        callback
    )
})

gulp.task('default', (callback) => {
    runSequence(
        'sass',
        'webpack',
        ['browserSync', 'images', 'watch'],
        callback
    )
})

gulp.task('webpack', () => {
    return gulp.src('./app/src/app.js')
        .pipe(webpack({
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./app/js/'))
})

// gulp.task('webpack2', () => {
//     return gulp.src('./app/admin-src/app.js')
//         .pipe(webpack({
//             output: {
//                 filename: 'admin.app.js'
//             }
//         }))
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('./app/js/'))
// })