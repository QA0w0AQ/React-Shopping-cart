import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CreateCart extends Component {
    render () {
        let cartMessage;
        if (this.props.itemCarts.length === 0) {
            cartMessage = (
                <span>
                <h3>This cart is empty</h3>
                <p>Please add some items in your cart!</p>
                </span>
            )
        } else {
            cartMessage = (
                <div>
                    <div>
                    {this.props.itemCarts.map((itemCart,index)=>(
                        <div key={index} className='itemCart-name'>
                        <img className="itemCart-image" src={itemCart.url} alt={index} />
         
                            <span>{itemCart.name}</span>
                            <span>Price:{itemCart.price}</span>
                            <span>Number: {itemCart.itemsNumber}</span>
                            <button onClick={() => this.props.removeIt(itemCart)}> X </button>
                            </div>
                    ))}
                    </div>
                    
                </div>

            )
        }


        return (
            <div>
            <div>
                <Link to='/' className='backButton'>Back</Link>
            </div>
            <span className='empty'>{ cartMessage }</span>
            <h2>Total Price: {this.props.itemCarts.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)}</h2>
            </div>
        )
    }
}

export default CreateCart;