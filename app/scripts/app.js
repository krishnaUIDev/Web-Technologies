(function (angular) {
  'use strict';

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/home',{
        templateUrl: '../template/Home.html',
        controller:'homeController'
      })
      .when('/signup',{
        templateUrl: '../template/signup.html'
      })
      .when('/reset',{
        templateUrl: '../template/forget.html'
      })
      .when('/list',{
        templateUrl: '../template/List.html',
        controller:'bookListController'
      })
      .when('/kart',{
        templateUrl: '../template/kart.html',
        controller:'kartController'
      })
      //angular
      .when('/angular',{
        templateUrl: '../template/Angularjs/angularhome.html'
      })
      .when('/mvc',{
        templateUrl: '../template/Angularjs/mvc.html'
      })
      .when('/dir',{
        templateUrl: '../template/Angularjs/directives.html'
      })
      .when('/fil',{
        templateUrl: '../template/Angularjs/filter.html'
      })
      .otherwise('/home');
  }

angular.module('projctApp',[
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'booklist.factory',
  'customApp.controller'])


  .config(AppConfig);
//customcontroller creating
  angular.module('customApp.controller',[]);
  angular.module('booklist.factory',[]);
})(window.angular || (window.angular = {}));
