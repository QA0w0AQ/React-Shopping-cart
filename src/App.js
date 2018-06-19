import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Shoppingcart from './Shoppingcart'
import CreateCart from './CreateCart'


class App extends Component {
  state = {
    shoppingcarts: [
      {
          name: "Apple",
          itemsNumber: 1,
          price: 20,
          description:"so nice!",
          url: "https://media.istockphoto.com/photos/red-apple-picture-id495878092?k=6&m=495878092&s=612x612&w=0&h=q9k5jN-1giBGZgTM6QhyKkPqtGf6vRpkgDzAwEz9DkY="
      },
      {
          name: "Orange",
          itemsNumber: 1,
          price: 15,
          description:"so sweet!",
          url: "http://soappotions.com/wp-content/uploads/2017/10/orange.jpg"
      },
      {
          name: "Peach",
          itemsNumber: 1,
          price: 30,
          description:"so cool!",
          url: "http://sportsvape.net/wp-content/uploads/2014/09/Peach.jpg"
      },
      {
          name: "Pear",
          itemsNumber: 1,
          price: 8,
          description:"so water!",
          url: "https://cdn.shopify.com/s/files/1/1853/6981/products/golden_pear_1024x1024.jpg?v=1527187998"
      },    
      {
        name: "Banana",
        itemsNumber: 1,
        price: 18,
        description:"so yellow!",
        url: "https://www.maritimefirstnewspaper.com/wp-content/uploads/2017/11/Banana3-1020x765.jpg"
      },
      {
        name: "Watermelon",
        itemsNumber: 1,
        price: 32,
        description:"so water!",
        url: "https://tableandco.com.au/wp-content/uploads/2017/03/Watermelon.jpg"
      },
      {
        name: "Mango",
        itemsNumber: 1,
        price: 35,
        description:"so hot!",
        url: "http://sportsvape.net/wp-content/uploads/2014/09/Mango.jpg"
      },
      {
        name: "Grapes",
        itemsNumber: 1,
        price: 24,
        description:"so nice!",
        url: "https://i0.wp.com/www.dimidwa.com/wp-content/uploads/2018/01/grapes-promo.png?fit=1000%2C567&ssl=1"
      }
  ],
  itemCarts: []

  }
  addItemToCart = (shoppingcart) => {
    this.setState((previousState)=>({
      itemCarts:previousState.itemCarts.concat([shoppingcart])//itemCarts:[...previousState.itemCarts, shoppingcart])
    }))
    console.log(this.state.itemCarts);
    console.log(this.state.itemCarts.length);
    
  }

  removeItems = (itemCart) => {
    var newArray = [...this.state.itemCarts]
    
    this.setState((state)=> {
      newArray.splice(newArray.indexOf(itemCart), 1)
      return {itemCarts: newArray}
    })
  }
      
  render () {
    return (
      <div className='app'>
      <Route exact path='/' render={()=>(
        <Shoppingcart shoppingcarts = {this.state.shoppingcarts}
        addShoppingItem={this.addItemToCart} 
        itemCarts = {this.state.itemCarts}
        />
      )}/>
      <Route path='/addCart' render={()=>(
        <CreateCart removeIt = {this.removeItems}
        itemCarts = {this.state.itemCarts}/>
      )}/>


      </div>
    )
  }
}

export default App;
