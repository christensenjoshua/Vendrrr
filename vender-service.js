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
      amount: 45,
      image: 'https://t7.rbxcdn.com/9fbba7b027ec884d34981310675c08a3'
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20,
      image: 'https://target.scene7.com/is/image/Target/52034274?wid=328&hei=328&qlt=80&fmt=pjpeg'
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3,
      image: 'https://i.kym-cdn.com/photos/images/newsfeed/000/001/384/Atrapitis.gif'
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7,
      image: 'https://res.cloudinary.com/teepublic/image/private/s--DsVHRht8--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1505450295/production/designs/1898689_1.jpg'
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1,
      image: 'https://vignette.wikia.nocookie.net/vsbattles/images/b/b2/Faceless_void.jpg/revision/latest?cb=20171114070120'
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
      return true
    }else{
      //could not purchase item
      alert('Not enough money!')
      return false
    }
  }



}