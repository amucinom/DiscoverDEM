var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', function() {
    gulp.src('.')
    	.pipe(serve({
    		livereload: true,
    		directoryListing: false,
    		open: true,
    	}));
});
