import React, { useContext, useEffect, useState } from 'react'
import MealItemForm from './Meals/MealItemForm';
import CartContext from '@auth/store/cart-context';

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

function Post({ title, description, initialPrice, image, category, electronicID, index,finalPrice,discount, images }) {
  const [images1, setImages1] = useState([]);
  const cartCtx = useContext(CartContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: electronicID,
      name:title,
      amount:amount,
      description:description,
      link: `https://electrikacomputers.co.ke/product-view/${electronicID}`,
      price: discount === true ? finalPrice : initialPrice,
      image: images.length === 0 ? "https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" : images[0]?.image_url,
      received:false,
    });
  };


  return (

    <div key={index} className="col-lg-4 col-sm-6">
<div className="product-box">
  <div className="imagebox">
  <div>
  {images.length === 0 ? <> <img src={image} alt={title}/> </> : <><img src={images[0]?.image_url} alt={title} style={{height:220,borderRadius:8}}/></>}

  </div>
    <div className="box-content">
      <div className="cat-name">
        <a href={`/product-view/${electronicID}`} title>{category}</a>
      </div>
      <div className="product-name">
        <a href={`/product-view/${electronicID}`} title>{title}</a>
      </div>
      <div className="price">
        <span className="sale">Ksh{numberWithCommas(initialPrice)}</span>
      </div>
    </div>{/* /.box-content */}
    <div className="box-bottom">
      <div className="btn-add-cart">
      <MealItemForm id = {electronicID} onAddToCart={addToCartHandler} title={title}/>
      </div>
      <div className="compare-wishlist">
        <a className="compare" title>
          <img src="/images/icons/compare.png" alt="" />Compare
        </a>
        <a className="wishlist" title>
          <img src="/images/icons/wishlist.png" alt="" />Wishlist
        </a>
      </div>
    </div>{/* /.box-bottom */}
  </div>{/* /.imagebox */}
</div>
</div>

  )
}

export default Post