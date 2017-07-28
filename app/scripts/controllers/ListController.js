
(function (angular) {
  'use strict';
  function BookListController($scope, $http){
    $http({
      method:'GET',
      url:'../data/details.json'
    }).then(function (response) {
      $scope.list = response.data;
    });

  }
  BookListController.$inject= ['$scope','$http'];


  angular.module('customApp.controller').controller('bookListController',BookListController);

})(window.angular || (window.angular = {}));
