import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

async function fetchImagesForID(electronicID) {
  const response = await fetch(`https://electrikacomputers.co.ke/backend/php/getimages.php?electronicId=${electronicID}`);
  const data = await response.json();
  return data;
}

function Post({ title, index, initialPrice, category, electronicID, timestamp, finalPrice, images }) {
  // const [image, setImage] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const imageData = await fetchImagesForID(electronicID);
  //       setImage(imageData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchImages(); // Fetch and set images immediately
  // }, [electronicID]);


  return (
    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
      <div className="image">
      {images.length === 0 ? (
        <img src="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" alt="Electrika" style={{ height: 30 }} />
    ):(
      <img src={images[0].image_url} alt="Electrika" style={{ height: 30 }} />
    )}
          
      </div>
      <div style={{marginLeft:10}} className="info-product">
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
        <span style={{fontSize:16}} className="sale">
          Ksh{numberWithCommas(initialPrice)}
        </span>
      </div>
    </div>
    </li>
  );
}

export default Post;
