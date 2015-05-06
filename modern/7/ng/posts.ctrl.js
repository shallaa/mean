/**
 * Created by JunHo on 2015-04-28.
 */
angular.module('app').controller( 'PostsCtrl', function( $scope, PostSvc ){
    $scope.addPost = function(){
        if( $scope.postBody ){
            PostSvc.create({body:$scope.postBody}).success( function(post){
                // $scope.posts.unshift(post);
                $scope.postBody = null;
            } );
        }
    };

    $scope.$on( 'ws:new_post', function( _, post ){
        $scope.$apply( function(){
            $scope.posts.unshift(post);
        } );
    } );

    PostSvc.fetch().then( function(posts){
        $scope.posts = posts;
    } );
} );
