/**
 * Created by JunHo on 2015-04-28.
 */
angular.module('app').config( function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({enabled:true, requireBase:false});
    $routeProvider
        .when( '/', {controller:'PostsCtrl', templateUrl:'/templates/posts.html'} )
        .when( '/register', {controller:'RegisterCtrl', templateUrl:'/templates/register.html'} )
        .when( '/login', {controller:'LoginCtrl', templateUrl:'/templates/login.html'});
} );