var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('assets/scss/app.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('assets/css/dist'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
}); 

gulp.task('default', ['sass', 'watch']);