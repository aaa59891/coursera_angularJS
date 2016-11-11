(function () {
  "use strict";

  angular.module("inheritanceTest", [])
  .controller("ParantController1", ParantController1)
  .controller("ChildController1",ChildController1);

  ParantController1.$inject = ["$scope"];
  function ParantController1($scope) {
    // $scope.value = 1;
    $scope.pc = this;
    $scope.pc.value = 2;
    console.log("this:", this);
    console.log("parent's value: ",$scope.value);
    console.log("this.value: ", $scope.pc.value);
  }

  ChildController1.$inject = ["$scope"];
  function ChildController1($scope) {
    console.log("child's value: ", $scope.pc.value);
    console.log("child's scope: ", $scope);
  }
})();
