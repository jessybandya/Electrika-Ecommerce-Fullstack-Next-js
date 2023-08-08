"use client"

import React, { useEffect, useState } from 'react'
import Newarrival from './New-Arrival';
import Featured from './Top-Featured';
import Selling from './Top-Selling';
import Products from './Our-Products';
import Viewed from './Most-Viewed';
import Footer from '@components/Footer';
import Bestseller from './Best-Seller';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';


const data =  [
  {
    image: 'images/slider/slider-01.jpg',
    link: '/shopping',
  },
  {
    image: 'images/slider/slider-03.jpg',
    link: '/shopping',
  },
  {
    image: 'images/slider/slider-04.jpg',
    link: '/shopping',
  },
];


function Home({ allData, images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;
  const [selected, setSelected] = useState('laptops');



  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const selectedFun = (name) =>{
    setSelected(name);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const pageTitle = "Welcome to our Online Store";
  const pageDescription = "Discover a wide range of laptops and shop online with ease.";
  const imageUrl = "/media/images/favicon.ico";

  return (
    <div className="header_sticky">
    <Helmet>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />

    {/* Open Graph meta tags */}
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content={imageUrl} />

    {/* Twitter Card meta tags */}
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={imageUrl} />
  </Helmet>
        <div className="boxed style1">

          <section className="flat-row flat-slider home-carousel">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Carousel style={{willChange:'transform'}} className="slider" indicators={false} animation="slide" interval={3000}>
                
                <Carousel.Item>
                <div className="slider-item">
                <div className="item-text">
                <div className="header-item">
                  <p>Laptop</p>
                  <h2 style={{fontSize:25}} className="name">HP spectre X360 14-ef0036nia</h2>
                  <p>The HP Spectre x360 14-ef0036nia is a powerful laptop featuring an Intel Core i7-1255U processor, Windows 11 Pro OS, and a 13.5-inch touch screen display. With integrated Intel Iris Xᵉ Graphics, 16GB LPDDR4x memory, and a 512GB SSD.</p>
                </div>
                <div className="content-item">
                  <div className="price">
                    <span className="sale">Ksh207,900</span>
                    <span className="btn-shop">
                      <a href="https://electrikacomputers.co.ke/product-view/397432750" title>SHOP NOW <img src="images/icons/right-2.png" alt="" /></a>
                    </span>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <img className='home-image' src="/media/images/logo2.jpg" style={{height:250,marginTop:40,borderBottomRightRadius:35}} alt="" />
              <div className="clearfix" />
                </div>
              </Carousel.Item>{/* /.slider */}


              <Carousel.Item>
              <div className="slider-item">
              <div className="item-text">
              <div className="header-item">
                <p>Laptop</p>
                <h2 style={{fontSize:25}} className="name">Lenovo Thinkbook 14 G2</h2>
                <p>The Lenovo ThinkBook 14 Gen 2 is a reliable laptop equipped with an Intel Core i7-1165G7 processor, Windows 11 Pro OS, and a 14-inch display. It offers smooth graphics performance with integrated Intel Iris Xe Graphics, and comes with 8GB DDR4 memory and a 256GB SSD for efficient storage.</p>
              </div>
              <div className="content-item">
                <div className="price">
                  <span className="sale">Ksh80,000</span>
                  <span className="btn-shop">
                    <a href="https://electrikacomputers.co.ke/product-view/384593180" title>SHOP NOW <img src="images/icons/right-2.png" alt="" /></a>
                  </span>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <img className='home-image' src="/media/images/logo2.jpg" style={{height:250,marginTop:40,borderBottomRightRadius:35}} alt="" />
            <div className="clearfix" />
              </div>
            </Carousel.Item>{/* /.slider */}


                </Carousel>{/* /.slider */}
              </div>{/* /.col-md-12 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.flat-slider */}



          <section className="flat-row flat-iconbox next-info">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="iconbox style1">
                    <div className="box-header">
                      <div className="image">
                        <img src="images/icons/car.png" alt="" />
                      </div>
                      <div className="box-title">
                        <h3>Worldwide Shipping</h3>
                      </div>
                      <div className="clearfix" />
                    </div>{/* /.box-header */}
                  </div>{/* /.iconbox */}
                </div>{/* /.col-md-6 col-lg-3 */}
                <div className="col-md-6 col-lg-3">
                  <div className="iconbox style1">
                    <div className="box-header">
                      <div className="image">
                        <img src="/images/icons/order.png" alt="" />
                      </div>
                      <div className="box-title">
                        <h3>Order Online Service</h3>
                      </div>
                      <div className="clearfix" />
                    </div>{/* /.box-header */}
                  </div>{/* /.iconbox */}
                </div>{/* /.col-md-6 col-lg-3 */}
                <div className="col-md-6 col-lg-3">
                  <div className="iconbox style1">
                    <div className="box-header">
                      <div className="image">
                        <img src="/images/icons/payment.png" alt="" />
                      </div>
                      <div className="box-title">
                        <h3>Payment</h3>
                      </div>
                      <div className="clearfix" />
                    </div>{/* /.box-header */}
                  </div>{/* /.iconbox */}
                </div>{/* /.col-md-6 col-lg-3 */}
                <div className="col-md-6 col-lg-3">
                  <div className="iconbox style1">
                    <div className="box-header">
                      <div className="image">
                        <img src="/images/icons/return.png" alt="" />
                      </div>
                      <div className="box-title">
                        <h3>Return 30 Days</h3>
                      </div>
                      <div className="clearfix" />
                    </div>{/* /.box-header */}
                  </div>{/* /.iconbox */}
                </div>{/* /.col-md-6 col-lg-3 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.flat-iconbox */}

          <main id="home-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="sidebar">
                  <div className="widget banner-box">
                  <div className="inner-box">
                    <a href="/shopping/1" title>
                      <img src="/images/slider/search-03.jpg" alt="" />
                    </a>
                  </div>
                </div>{/* /.widget widget-box */}
                    <div className="widget widget-products">
                      <div className="widget-title">
                        <h3>Best Seller</h3>
                      </div>
                      <Bestseller allData={allData} images={images} />
                    </div>{/* /.widget widget-products */}
                    <div className="widget banner-box">
                      <div className="inner-box">
                        <a href="/shopping/1" title>
                          <img src="/images/slider/search-02.jpg" alt="" />
                        </a>
                      </div>
                    </div>{/* /.widget widget-box */}
                  </div>{/* /.sidebar */}
                </div>{/* /.col-lg-3 col-md-4 */}
                <div className="col-lg-9 col-md-8">
                  <div className="wrap-imagebox flat-imagebox">
                    <div className="product-tab">
                      <ul className="tab-list">
                        <li className={selected === 'laptops' ? 'active' : ''} onClick={() => selectedFun('laptops')}>Top Laptops</li>
                        <li className={selected === 'desktops' ? 'active' : ''} onClick={() => selectedFun('desktops')}>New Desktops</li>
                        <li className={selected === 'monitors' ? 'active' : ''} onClick={() => selectedFun('monitors')}>New Monitors</li>
                      </ul>	
                    </div>{/* /.product-tab */}
                    <div className="box-product">
                    {selected === 'laptops' ? (
                      <Newarrival allData={allData} images={images} />
                    ): selected === 'desktops' ? (
                      <Featured allData={allData} images={images}/>
                    ): selected === 'monitors' ? (
                      <Selling allData={allData} images={images}/>
                    ):(
                      <Newarrival allData={allData} images={images} />
                    )}
                    </div>{/* /.box-product */}
                  </div>{/* /.wrap-imagebox flat-imagebox */}
                  <div className="wrap-imagebox flat-imagebox">
                    <div className="flat-row-title style2">
                      <h3>Our Products</h3>
                    </div>
                     <Products allData={allData} images={images}/>
                  </div>{/* /.wrap-imagebox flat-imagebox */}

                </div>{/* /.col-lg-9 col-md-8 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </main>{/* /.home-4 */}

        </div>{/* /.boxed */}
        {/* Javascript */}
      </div>
  
  )
}

export default Home