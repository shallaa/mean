/**
 * Created by JunHo on 2015-04-21.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use( '/api/posts/', require('./controllers/api/posts'));
app.use(require('./controllers/static'));    // app.use( '/', require('./controllers/static')); 와 동일

app.listen( 3000, function(){
    console.log( 'Server listening on', 3000 );
} );