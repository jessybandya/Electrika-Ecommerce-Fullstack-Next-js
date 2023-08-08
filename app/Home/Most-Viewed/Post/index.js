import React, { useContext } from 'react'
import CartContext from '@auth/store/cart-context';



function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

function Post({ title, description, initialPrice, images, category, electronicID, timestamp,finalPrice,discount }){
  const cartCtx = useContext(CartContext);
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: electronicID,
      name:title,
      amount:amount,
      description:description,
      link: `https://electrikacomputers.co.ke/product-view/${electronicID}`,
      price: discount === true ? finalPrice : initialPrice,
      image: images.length === 0 ? "https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" : images[0].url,
      received:false,
    });
  };

  return (
    <div className="imagebox style4 style4-4">
    <div className="box-image">
      <a href="#" title>
        <img src="images/product/other/10.jpg" alt="" />
      </a>
    </div>
    <div className="box-content">
      <div className="cat-name">
        <a href="#" title>Laptops</a>
      </div>
      <div className="product-name">
        <a href="#" title>Apple iPad Mini<br />G2356</a>
      </div>
      <div className="price">
        <span className="sale">$600.00</span>
        <span className="regular">$2,999.00</span>
      </div>
    </div>
  </div>
  )
}

export default Post