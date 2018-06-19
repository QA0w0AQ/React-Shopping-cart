import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Shoppingcart extends Component {
    state = {
        query:' '
    }
   
    updateQuery = (query) => {
        this.setState({query: query.trim() })
    }

    render () {
        const { addShoppingItem,itemCarts,shoppingcarts } = this.props
        const { query } = this.state

        let showingFruit
        
        if (query) {
        const match = new RegExp(escapeRegExp(query), 'i')
        showingFruit = shoppingcarts.filter((shoppingcart)=>match.test(shoppingcart.name))
         }else {
        showingFruit = shoppingcarts
        }
        
        showingFruit.sort(sortBy('name'))  

        return (
            <div>
                <h1>Shopping Cart</h1>
            <div className='shopping-top'>
                <input
                    className="search-items"
                    type="text"
                    placeholder="Search for Fruits"
                    value={query}
                    onChange={(event)=>this.updateQuery(event.target.value)}
                    />
                    <button className='search-button' type='submit'></button>

                <Link to='/addCart'
                className='add-items'><img className="webImg" alt='chartImg' src='https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/shopping_cart2.png'/></Link>
                <span className='items-count'> {itemCarts.length}</span>
            </div>

            {showingFruit.length !==shoppingcarts.length && (
                <div className='showing-shopping'>
                    <span>
                        Now showing {showingFruit.length} of {shoppingcarts.length} total
                    </span>
                </div>
            ) }

       <div className='container'>
       {showingFruit.map((shoppingcart) => (
           <ul key={shoppingcart.name} className='shoppingcart-name'>
                <div className='box'>
                <img className="shoppingcart-image" src={shoppingcart.url} alt='shoppingcart.name' />
                    <div className='list'>
                        <li>{shoppingcart.name}</li>
                        <li> description: {shoppingcart.description}</li>
                        <li>Price:{shoppingcart.price}</li>
                    </div>
                    <button onClick={() => addShoppingItem(shoppingcart)} className='addButton'>Add to Cart</button>
           </div>
           </ul>
       ))}
       </div>
        </div>  
        )
    }
}

export default Shoppingcart;