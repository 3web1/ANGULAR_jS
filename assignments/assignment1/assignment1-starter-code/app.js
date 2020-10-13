(function () {
    'use strict';
    
    angular.module('DishCount', [])
    .controller('CountController', CountController);
    
    CountController.$inject = ['$scope'];
    function CountController($scope) {
      $scope.string = "";
      $scope.count = "";
      $scope.style = "";
    
      $scope.getCount = function () {
        
        $scope.countWords($scope.string);
        
      };
    
      $scope.countWords = function () {
        var wordCount = $scope.string.match(/(\w+)/g).length;
        if(wordCount === 0){
          $scope.count = "Please enter data first"
        }
        else if(wordCount <= 3){
          $scope.count = "Enjoy!"
          $scope.style = "green"
        }
        else{
          $scope.count = "Too Much!"
          $scope.style = "red"
        }
      };
    }
    
    })();