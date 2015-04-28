/**
 * Created by JunHo on 2015-04-21.
 */
var app = angular.module( 'app', [] );

app.service( 'PostsSvc', function($http){
    this.fetch = function(){
        return $http.get('/api/posts');
    };

    this.create = function(post){
        return $http.post( '/api/posts', post );
    };
} );

app.controller( 'PostCtrl', function( $scope, PostsSvc ){
    $scope.addPost = function(){
        if( $scope.postBody ){
            PostsSvc.create({username:'shallaa', body:$scope.postBody}).success( function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null;
            } );

            $http.post( '/api/posts', {
                username:'shallaa',
                body:$scope.postBody
            }).success( function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null;
            } );
        }
    };

    PostsSvc.fetch().success( function(posts){
        $scope.posts = posts;
    } );
} );