/**
 * Created by JunHo on 2015-04-21.
 */
var Post = require('../../models/post');
var router = require('express').Router();
var websockets = require('../../websockets');

router.get( '/posts', function( req, res, next ){
    Post.find().sort('-date').exec( function( err, posts ){
        if( err ){ return next(err); }
        res.json(posts);
    } );
} );

router.post( '/posts', function( req, res, next ){
    var post = new Post({body:req.body.body});
    
    if( req.auth ){
        post.username = req.auth.username;
    }else{
        post.username = 'tester';
    }
    
    post.save( function( err, post ){
        if( err ) { return next(err); }
        websockets.broadcast( 'new_post', post );
        res.status( 201 ).json( post );
    } );
} );

module.exports = router;
