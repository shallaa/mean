/**
 * Created by JunHo on 2015-04-20.
 */
var express = require('express');
var app = express();

app.get( '/', function( req, res ){
    res.send( 200, 'Hello World' );
} );

app.listen(8888);