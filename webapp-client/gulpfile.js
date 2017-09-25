var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

gulp.task('webserver', function () {
    connect.server({
        port: 9000,
        livereload: true,
        middleware: function(connect, opt) {
            return [
                proxy('/api', {
                    target: 'http://localhost:8080',
                    changeOrigin: true
                })
            ]
        }
    });
});

gulp.task('serve', ['webserver']);