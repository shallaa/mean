/**
 * Created by JunHo on 2015-04-28.
 */
angular.module('app').controller( 'PostCtrl', function( $scope, PostSvc ){
    $scope.addPost = function(){
        if( $scope.postBody ){
            PostSvc.create({username:'shallaa', body:$scope.postBody}).success( function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null;
            } );
        }
    };

    PostSvc.fetch().success( function(posts){
        $scope.posts = posts;
    } );
} );