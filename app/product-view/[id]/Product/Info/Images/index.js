import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleNavigationClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
    {images?.length === 0 ?(
      <img src="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" alt='Electrika Product' />
    ): images?.length === 1 ?(
      <img src="https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" alt='Electrika Product' />
    ):(
      <>
      <div className="carousel-container">
      <Slider {...settings} initialSlide={currentSlide}>
        {images?.map((image, index) => (
          <div key={index}>
            <img src={image?.image_url} alt={`Image ${index}`} style={{height:350,borderRadius:8}}/>
          </div>
        ))}
      </Slider>

      <div className="carousel-navigation">
         {images?.map((image, index) => (
          <div
            key={index}
            className={`carousel-navigation-item ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleNavigationClick(index)}
          >
            <img src={image?.image_url} alt={`Navigation Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
      </>  
      )}
    </>
  );
};

export default ImageCarousel;
