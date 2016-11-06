(function () {
  "use strict";
  angular.module("NameCalculator", [])
  .controller('NameCalculatorController', function ($scope, $chong) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayTotalValue = function () {
      $scope.totalValue = calculateTotalValue($scope.name);
    }
    console.log($chong.annotate(NameCalculatorController));
    function calculateTotalValue(string) {
      var totalValue = 0;
      for(var i = 0; i < string.length; i++){
        totalValue += string.charCodeAt(i);
      }
      return totalValue;
    }
  });
})();
