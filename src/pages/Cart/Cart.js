import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import {useNavigate} from 'react-router-dom'

const Cart = () => {

  const {cartItem, food_list, removeFromCart, getTotalCart} = useContext(StoreContext);
  const navigate = useNavigate() 

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p> 
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list?.map((food, index) => {
          if(cartItem[food._id] > 0) {
            return(
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={food.image} alt=''/>
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItem[food._id]}</p>
                  <p>${food.price*cartItem[food._id]}</p>
                  <p onClick={() => removeFromCart(food._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCart()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCart()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>${getTotalCart()===0?0:getTotalCart()+ 2}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div> 
            <p>If you have a promo code, Enter it here</p> 
            <div className='cart-promocode-input'>
              <input 
                type='text'
                placeholder='promo code'
              />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart