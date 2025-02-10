import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
const {getTotalCart} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
        </div>
        <input type='text' placeholder='Email Address'/>
        <input type='text' placeholder='Street'/>
        <div className='multi-field'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='State'/>
        </div>
        <div className='multi-field'>
          <input type='text' placeholder='Zip Code'/>
          <input type='text' placeholder='Country'/>
        </div>
        <input type='text' placeholder='Phone'/>
      </div>
      <div className='place-order-right'>
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
            <button>PROCEED TO CHECKOUT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder