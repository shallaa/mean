/**
 * Created by JunHo on 2015-04-28.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task( 'dev:server', function(){
    nodemon({
        script:'server.js',
        ext:'js',
        ignore:['ng*', 'gulp*', 'assets*']
    });
} );