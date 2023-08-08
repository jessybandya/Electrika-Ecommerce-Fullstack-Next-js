import React, { useContext, useEffect, useState } from 'react'
import MealItemForm from './Meals/MealItemForm';
import CartContext from '@auth/store/cart-context';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '@auth/redux/dataSlice';

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

function Post({ title, description, initialPrice, image, category, electronicID, index,finalPrice,discount, images }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const subtotal = useSelector(state => state.subtotal);
  const total = useSelector(state => state.total);

  console.log("Cart: ", cart)

  const handleAddToCart = () => {

    const itemToAdd = {
      id: electronicID,
      name: title,
      description: description,
      link: `https://electrikacomputers.co.ke/product-view/${electronicID}`,
      price: discount === true ? finalPrice : initialPrice,
      image: images.length === 0 ? "https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" : images[0]?.image_url,
      received: false,
      quantity: 1,
    };
    
    dispatch(addToCart(itemToAdd));
    toast.success(`"${title}" has been added to your cart!`,{
      position: "top-center",
    }); // Show toast notification
  };


  return (
    <div className="col-lg-4 col-sm-6">
    <div className="product-box">
      <div className="imagebox">
      <div>
      {images.length === 0 ? <> <img src={image} alt={title}/> </> : <><img src={images[0]?.image_url} alt={title} style={{height:220,borderRadius:8}}/></>}
  
      </div>
        <div className="box-content">
          <div className="cat-name">
            <Link href={`/product-view/${electronicID}`} title>{category}</Link>
          </div>
          <div className="product-name">
            <Link href={`/product-view/${electronicID}`} title>{title}</Link>
          </div>
          <div className="price">
            <span className="sale">Ksh{numberWithCommas(initialPrice)}</span>
          </div>
        </div>{/* /.box-content */}
        <div className="box-bottom">
          <div className="btn-add-cart">            
          <a style={{cursor:'pointer'}} onClick={handleAddToCart}>
          <img src="/images/icons/add-cart.png" alt="" />Add to Cart
          </a>
          </div>
          <div className="compare-wishlist">
            <a className="compare" title>
              <img src="/images/icons/compare.png" alt="" />Compare
            </a>
            <a className="wishlist" title>
              <img src="/images/icons/wishlist.png" alt="" />Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Post