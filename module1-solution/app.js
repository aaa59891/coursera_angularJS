(function () {
  "use strict";
  angular.module("LunchCheck", [])
  .controller('LunchCheckController', module1);
  module1.$inject = ['$scope'];
  function module1($scope) {
    $scope.items = '';
    $scope.message = '';
    $scope.color = '';
    $scope.checkItems = function () {
      var items = $scope.items.split(',');
      var number = calculateItems(items);
      if(number == 0){
        $scope.message = 'Please enter data first';
        $scope.color = 'red';
      }else{
        if(number <= 3){
          $scope.message = 'Enjoy!';
        }else{
          $scope.message = 'Too much!';
        }
        $scope.color = 'green';
      }
    }
  }
  function calculateItems(items) {
    var number = 0;
    for(var item of items){
      if(!(typeof item == 'undefined' || item == '')){
        number++;
      }
    }
    return number;
  }
})();
