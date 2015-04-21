/**
 * Created by JunHo on 2015-04-21.
 */
var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));

app.get( '/', function( req, res ){
    res.sendfile('layouts/posts.html');
} );

app.listen( 3000, function(){
    console.log( 'Server listening on', 3000 );
} );