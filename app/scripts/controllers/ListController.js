
/**
 * Created by KRISHNA on 7/5/2017.
 */
(function (angular) {
  'use strict';
  function BookListController($scope){
    var list = [
      {title:"AngularJS", Description:"Single page Application"},
      {title:"ReactJS", Description:"Single page Application"},
      {title:"NodeJS", Description:"Single page Application"},
      {title:"Bootstrap", Description:"Single page Application"},
      {title:"CSS3", Description:"Single page Application"},
      {title:"HTML5", Description:"Single page Application"}
    ];
    $scope.list = list;

  }
  BookListController.$inject= ['$scope'];


  angular.module('customApp.controller').controller('bookListController',BookListController);

})(window.angular || (window.angular = {}));
