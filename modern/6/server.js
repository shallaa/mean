/**
 * Created by JunHo on 2015-04-21.
 */
var express = require('express');

var app = express();

app.use( '/api/posts/', require('./controllers/api/posts') );
app.use( '/api/sessions', require('./controllers/api/sessions') );
app.use( '/api/users', require('./controllers/api/user') );
app.use(require('./controllers/static'));    // app.use( '/', require('./controllers/static')); 와 동일

app.listen( 3000, function(){
    console.log( 'Server listening on', 3000 );
} );