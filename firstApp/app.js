(function () {
  "use strict";

  angular.module("myFirstApp", [])
  .controller("myFirstController", function ($scope) {
    var firstNum = $scope.firstNum = 3;
    var secondNum = $scope.secondNum = 4;
    $scope.total = firstNum + secondNum;
  });
})();
