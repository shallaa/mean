/**
 * Created by JunHo on 2015-04-21.
 */
var express = require('express');
var router = express.Router();

router.use(express.static( __dirname + '/../assets' ));

router.get( '/', function( req, res ){
    res.sendfile('layouts/posts.html');
} );

module.exports = router;