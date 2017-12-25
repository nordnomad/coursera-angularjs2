(function () {
'use strict';

angular.module('MyApp', [])
.controller('LunchCheckController',  LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkMenu = function () {
      if ($scope.lunchMenu == undefined) {
        $scope.message = "Please enter data first";
        return;
      }
      var menu = $scope.lunchMenu.split(',').filter(function (elem) {
        return elem.trim().length > 0;
      });
      if(menu.length === 0) {
        $scope.message = "Please enter data first";
      } else if(menu.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
  };


}})();
