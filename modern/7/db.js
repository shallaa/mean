/**
 * Created by JunHo on 2015-04-21.
 */
var mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost/social', function(){
    console.log('mongodb connected');
} );

module.exports = mongoose;