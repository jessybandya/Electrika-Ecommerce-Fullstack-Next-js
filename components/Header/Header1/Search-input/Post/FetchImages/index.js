import React, { useState, useEffect } from 'react';

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

function FetchImages({ title, description, initialPrice, category, electronicId, timestamp, finalPrice, index, images}) {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageData = await fetchImagesForID(electronicId);
        setImage(imageData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchImages(); // Fetch and set images immediately
  }, [electronicId]);


  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
    <div className="image">
    {images.length === 0 ? (
        <img src="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" alt="Electrika" style={{ height: 30 }} />
    ):(
        <img src={images[0].image_url} alt="Electrika" style={{ height: 30 }} />
    )}
</div>
    </li>
  );
}

export default FetchImages;
