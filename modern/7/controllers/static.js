/**
 * Created by JunHo on 2015-04-21.
 */
var express = require('express');
var router = express.Router();

router.use(express.static( __dirname + '/../assets' ));
router.use( '/templates', express.static( __dirname + '/../templates' ));

router.get( '/', function( req, res ){
    res.sendfile('layouts/app.html');
} );

module.exports = router;