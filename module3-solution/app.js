(function () {
  "use strict";

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope:{
        found: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject =["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var nidc = this;
    nidc.found = [];
    nidc.searchItem = '';
    nidc.empty = false;
    nidc.search = function () {
      if(nidc.searchItem == ''){
        nidc.empty = true;
        return;
      }
      var promise = MenuSearchService.getMenuPromise();
      promise.then(function (response) {
        nidc.found = [];
        for(var item of response.data.menu_items){
          if(item.description.toLowerCase().indexOf(nidc.searchItem) !== -1){
            nidc.found.push(item);
          }
        }
        if(nidc.found.length == 0){
          nidc.empty = true;
        }else{
          nidc.empty = false;
        }
      }).catch(function (errMsg) {
        alert(errMsg);
      })
    }
    nidc.remove = function (index) {
      nidc.found.splice(index, 1);
      if(nidc.found.length == 0){
        nidc.empty = true;
      }
    };
  }

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    this.getMenuPromise = function () {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      });
    }
  }
})();
