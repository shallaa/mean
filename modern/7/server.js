/**
 * Created by JunHo on 2015-04-21.
 */
var express = require('express');
var logger = require('morgan');
var websockets = require('./websockets');

var app = express();
app.use(logger('dev'));
app.use( require( './controllers' ) );

var port = process.env.PORT || 3000;
var server = app.listen( port, function(){
    console.log( 'Server listening on', server.address().port );
} );

websockets.connect(server);