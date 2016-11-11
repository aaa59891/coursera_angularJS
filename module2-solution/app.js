(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"]
  function ToBuyController(ShoppingListCheckOffService) {
    var slcos = ShoppingListCheckOffService;
    this.buyItems = slcos.getBuyItems();
    this.addToBought = function (index) {
      slcos.addToBought(index);
    }
    this.addToBuy = function () {
      slcos.addToBuy(this.name, this.quantity);
    }
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var slcos = ShoppingListCheckOffService;
    this.boughtItems = slcos.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var buyItems = [
      {
        name:"cookies",
        quantity:10
      },
      {
        name:"cakes",
        quantity:8
      },
      {
        name:"sodas",
        quantity:14
      },
      {
        name:"milk",
        quantity:2
      },
      {
        name:"juice",
        quantity:18
      },
    ];
    var boughtItems = [];

    this.addToBuy = function (name, quantity) {
      var item = {
        name:name,
        quantity:quantity
      };
      if(!checkSameItem(buyItems, item)){
        buyItems.push(item);
      }
    }

    this.addToBought = function (index) {
      var needToPush = true;
      if(!checkSameItem(boughtItems, buyItems[index])){
        boughtItems.push(buyItems[index]);
      }
      buyItems.splice(index,1);
    }

    this.getBuyItems = function () {
      return buyItems;
    }
    this.getBoughtItems = function () {
      return boughtItems;
    }
  }

  function checkSameItem(items, checkItem) {
    for(var item of items){
      if(item.name == checkItem.name){
        item.quantity = parseInt(item.quantity) + parseInt(checkItem.quantity);
        return true;
      }
    }
    return false;
  }
})();
