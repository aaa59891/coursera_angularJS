(function () {
  "use strict";
  var myArray = [
    {
      name:'chong',
      age:25
    },
    {
      name:'anita',
      age:24
    }
  ]

  angular.module("loopTest", [])
  .controller("loopTestController", loopTestController);
  loopTestController.$inject = ["$scope"];

  function loopTestController($scope){
    var s = $scope;
    s.myArray = myArray;
    s.delete = function () {
      var pos = s.index;
      s.myArray.splice(pos,1);
    }
  }
})();
