import Link from 'next/link';
import React, { useEffect, useState } from 'react'


function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
function Post({ os, processor, ram, storage, electronicID, description, initialPrice, finalPrice, title, discount, image, timestamp, category,percentage }) {
  const [images1, setImages1] = useState([]);

const fetchImages = (electronicId) => {
  // Fetch the images for the specified electronic ID
  fetch(`https://electrikacomputers.co.ke/backend/php/getimages.php?electronicId=${electronicId}`)
    .then(response => response.json())
    .then(data => setImages1(data))
    .catch(error => console.error(error));
};

useEffect(() => {
  // Call the fetchImages function initially to load the images
  fetchImages(electronicID);

  // Set up an interval to fetch images at regular intervals (e.g., every 5 seconds)
  const interval = setInterval(() => {
    fetchImages(electronicID);
  }, 1000); // Adjust the interval time as needed

  // Clean up the interval on component unmount
  return () => {
    clearInterval(interval);
  };
}, [electronicID]);

  return (
    <li>
    <div className="image">

    {images1.length === 0 ? <> <img src={image} alt={title} style={{height: 30}}/> </> : <><img src={images1[0]?.image_url} alt={title} style={{height: 30}}/></>}

    </div>{/* /.box-image */}
    <div className="info-product">
      <div className="name">
        <Link 
        href={`/product-view/${electronicID}`}
        style={{
            fontSize:13,
            color:'#10BBE5'
          }} title>{title}<span style={{
            marginLeft:5,
            marginRight:5
          }}>-</span><span style={{fontWeight:'bold'}}>{category}</span></Link>
      </div>
      <div className="price">
        <span className="sale">
          Ksh{numberWithCommas(initialPrice)}
        </span>
      </div>
    </div>
  </li>
  )
}

export default Post