var gulp = require("gulp");

gulp.task('build', function () {

    gulp.src('src/**/*.html')
        .pipe(gulp.dest('pages'))
        .pipe(gulp.dest('.'))

    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('assets'))
});