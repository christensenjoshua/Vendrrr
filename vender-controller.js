function VenderController() {
  //private parts
  let venderService = new VenderService()
  drawItems()
  //items is an array we need to get from the service and give to drawItems
  function drawItems() {
    let items = venderService.getItems()
    //we will take in a paramter(items) and iterate over it to build
    //a template to draw to the screen.
    let template = ''
    for(let i = 0; i < items.length; i++){
      let currItem = items[i]
      let btnOnClick = ""
      if(currItem.amount < 1){
        btnClass = 'btn btn-secondary'
        btnDesc = 'Out of Stock'
      }else{
        btnClass = 'btn btn-primary'
        btnOnClick = "app.controllers.venderController.purchaseItem('"+i+"')"
        btnDesc = 'Purchase'
      }
      template += `
      <div class="col-4">
        <h5>${currItem.name}</h5>
        <p>${currItem.description}</p>
        <p>Price: ${currItem.price}</p>
        <p>In Stock: ${currItem.amount}</p>
        <button class="${btnClass}" onclick="${btnOnClick}">${btnDesc}</button>
      </div>
      `
    }
    document.getElementById('items').innerHTML = template
  }
  function drawMoney(){
    let currMoney = venderService.getMoney()
    document.getElementById('moneyAmt').innerText = currMoney
  }

  //public parts


  //we need a function to take money from our "view" and pass it to our service
  this.addMoney = function(){
    venderService.addMoney()
    drawMoney()
  }
  this.purchaseItem = function(itemNum){
    venderService.purchaseItem(itemNum)
    drawItems()
    drawMoney()
  }

}