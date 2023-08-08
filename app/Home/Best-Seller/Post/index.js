import React, { useEffect, useState } from 'react'


function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

function Post({ title, description, initialPrice, image, category, electronicID, index,finalPrice,discount, images }){


  return (
    <li key={index}>
    <div className="img-product">
    <a href={`/product-view/${electronicID}`}>
    {images.length === 0 ? <> <img src={image} alt={title} style={{height:50,width:'100%',objectFit:'contain'}}/> </> : <>
    <img src={images[0]?.image_url} alt={title} style={{height:50,width:'100%',objectFit:'contain'}}/>    
    </>}
    </a>
    </div>
    <div className="info-product">
      <div className="name">
        <a href={`/product-view/${electronicID}`} title>{title}</a>
      </div>
      <div className="queue">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </div>
      <div className="price">
        <span className="sale">Ksh{numberWithCommas(initialPrice)}</span>
      </div>
    </div>
  </li>
  )
}

export default Post