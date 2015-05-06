/**
 * Created by JunHo on 2015-04-28.
 */
angular.module('app').controller( 'LoginCtrl', function( $scope, UserSvc, $location ){
    $scope.login = function( username, password ){
        UserSvc.login( username, password).then( function(response){
            $scope.$emit( 'login', response.data );
            $location.path( '/' );
        } );
    };
} );