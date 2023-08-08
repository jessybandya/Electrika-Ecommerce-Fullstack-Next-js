import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '@auth/redux/dataSlice'; // Import your action creator
import "./styles.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';

const CartItem = (props) => {
	let commaNumber = require('comma-number')
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const subtotal = useSelector(state => state.subtotal);

  const handleRemoveFromCart = (itemId, name) => {
    dispatch(removeFromCart({ id: itemId }));
	toast.warn(`"${name}" has been removed from your cart!`,{
			  position: "top-center",
	})
  };

  const handleDecreaseQuantity = item => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncreaseQuantity = item => {
    dispatch(increaseQuantity(item));
  };

  return (
	<>
	{cart.map(item => 
		<div className="cart-item">
                <div className="cart-product-img">
                  <img src={item.image} alt={item.name}/>
                  {/* <div className="offer-badge">6% OFF</div> */}
                </div>
                <div className="cart-text">
                  <h4>{item.name}</h4>
                  <div className="cart-radio">

                  </div>
                  <div className="qty-group">
				  <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                </div>
                    <div className="cart-item-price"><DeleteForeverIcon style={{cursor:'pointer'}} onClick={() => handleRemoveFromCart(item.id,item.name)}/></div>
                  </div>
				  <p className="item-price">
                  Ksh{item.price} x {item.quantity} = Ksh{commaNumber(parseFloat(item.price * item.quantity).toFixed(2))}
                </p>
                </div>
              </div>
		)}
	</>
            
  )
}

export default CartItem