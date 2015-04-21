/**
 * Created by JunHo on 2015-04-21.
 */
var app = angular.module( 'app', [] );
app.controller( 'PostCtrl', function( $scope, $http ){
    $scope.addPost = function(){
        if( $scope.postBody ){
            $http.post( '/api/posts', {
                username:'shallaa',
                body:$scope.postBody
            }).success( function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null;
            } );
        }
    };

    $http.get('/api/posts').success( function(posts){
        $scope.posts = posts;
    } );
} );