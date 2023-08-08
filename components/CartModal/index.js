"use client"

import React, { useContext, useEffect, useState } from 'react';
import "./styles.css"
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from 'next/navigation';
import CartContext from '@auth/store/cart-context';
import { useSelector } from 'react-redux';
import Cart from '../Cart';
import { Button } from '@mui/material';
import UseWhatsapp from 'whatsapp-react-component';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import {
  clearCart
} from '@auth/redux/dataSlice'; // Import your action creator

const CartModal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal-overlay open" : "modal-overlay";
  const contentClassName = isOpen ? "modal-content open" : "modal-content";
  const commaNumber = require('comma-number')
  const phoneNumber = '+254713441634';
  const cartCtx = useContext(CartContext);
  const cart = useSelector(state => state.cart);
  const totalAmount = `${cartCtx?.totalAmount?.toFixed(2)}`;
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null);
  const history = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve user details from session storage
    const storedUser = sessionStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const clearCart1 = () => {
    dispatch(clearCart());
    onClose();
    toast.warn(`Your cart has been cleared!`,{
      position: "top-center",
    })
  }


  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  const sendtoWhatsapp = async () => {
      try {
        const totalPrice = addCommasToNumber(cartCtx?.totalAmount?.toFixed(2));
    
        const formattedCartItems = cartCtx.items.map((item, index) => {
          const formattedPrice = parseFloat(item.price).toLocaleString('en-US', { style: 'currency', currency: 'KES' });
    
          const itemDetails = `Item ${index + 1}\n*Name:* ${item.name}\n*Quantity:* ${item.amount}\n*Price:* ${formattedPrice}\n*Sub-Total Price:* KES ${addCommasToNumber((item.price * item.amount)?.toFixed(2))}\n*Link:* ${item.link}`;  
          return itemDetails;
        }).join('\n\n');
    
        const formattedTotalPrice = totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'KES' });
    
        const senderDetails = `*Client's Details*\n*Name:* ${user?.firstName} ${user?.lastName}\n*Phone Number:* ${user?.phone}\n*Email:* ${user?.email}`;
    
        const messageWithSenderDetails = `${senderDetails}\n\n\n${formattedCartItems}\n\n\n*Total Price:* KES ${formattedTotalPrice}`;
    
        UseWhatsapp(phoneNumber, messageWithSenderDetails);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error('Error sending cart items:', error,{
          position: toast.POSITION.TOP_CENTER
        });
      }
  };
  
  const handleLogin = () => {
    Swal.fire({
      title: 'Not Logged In !',
      text: 'Please login to continue',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        container: 'my-swal-container', // Add a custom CSS class name
      },
    }).then((result) => {
      if (result.isConfirmed) {
        history.push('/login');
      }
    });

  }



  return (
    <div style={{
      zIndex:2000,
      padding:5,
    }} className={modalClassName}>
      <div className={contentClassName} style={{
        backgroundColor:'white',
      }}>
      <div style={{width:'100%',alignItems:'center',justifyContent:'space-between',display:'flex'}}>
      <span style={{fontWeight:'bold',cursor:'pointer'}} ><Button onClick={clearCart1} style={{height:35}} variant="outlined">Clear</Button></span> <span style={{fontSize:15,color:'#10BBE5'}}>Ksh{commaNumber(totalAmount)}</span> <span><ClearIcon style={{cursor:'pointer'}} onClick={onClose}/></span>
    </div>

    <div
    style={{
      height: 'calc(100vh - 130px)',
      overflowY: 'auto'
     }}
    >
    {cart.length === 0 ? (
      <center>Your cart is empty</center>
    ) : (
      <Cart/>
    )}
    </div>

    <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
      <div></div>
    <div>
  {cart.length > 0 &&(
      <>
      {user !== null ?(
                <span onClick={sendtoWhatsapp} className="cart-checkout-btn hover-btn"><Button style={{height:35}} variant="contained">Checkout(WhatsApp)</Button></span>
      ):(
        <span onClick={handleLogin} className="cart-checkout-btn hover-btn"><Button style={{height:35}} variant="contained">Checkout(WhatsApp)</Button></span>
      )}
              
      </>
  )}
</div>
<div></div>
  </div>
      </div>
    </div>
  );
};

export default CartModal;
