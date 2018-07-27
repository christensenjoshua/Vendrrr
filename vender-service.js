function VenderService(){
  //private parts
  let money = 0

  //our purchaseable items, add some of your own!
  //we could add an id property to these items to display location for purchasing(A1, D4, etc)
  let items = [
    {
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1
    }
  ]

  //public parts

  
  this.addMoney = function(){
    money += .25
  }
  this.getMoney = function(){
    return money
  }
  this.getItems = function(){
    let theseItems = JSON.parse(JSON.stringify(items))
    return theseItems
  }
  this.purchaseItem = function(itemNum){
    //problem defining current item, since it is array...
    let currItem = items[itemNum]
    if(currItem.amount < 1){
      alert('Stop It')
      return false
    }
    if(currItem.price <= money){
      money -= currItem.price
      currItem.amount -= 1
      //vend the item
      alert('You bought it!')
      return true
    }else{
      //could not purchase item
      alert('Not enough money!')
      return false
    }
  }



}