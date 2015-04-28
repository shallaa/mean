/**
 * Created by JunHo on 2015-04-28.
 */
angular.module('app').service( 'PostSvc', function($http){
    this.fetch = function(){
        return $http.get('/api/posts');
    };

    this.create = function(post){
        return $http.post( '/api/posts', post );
    };
} );