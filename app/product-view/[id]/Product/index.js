"use client"
import React, { useContext, useEffect, useState } from 'react'
import { db } from '@auth/firebase'
import {datas} from '@assets/data/categories/data';
import Info from './Info';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Reviews from './Reviews';
import CircularProgress from '@mui/material/CircularProgress';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import CartContext from '@auth/store/cart-context';
import MealItemForm from './Meals/MealItemForm';
import { Helmet } from 'react-helmet';
import Link from 'next/link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  function valuetext(value) {
    return `Ksh${value}`;
  }
function Product( { params, images, allData }) {
    const [value, setValue] = React.useState([16000, 100000]);
    const commaNumber = require('comma-number')
    const [totalImages, setTotalImages] = useState([]);


    
    
    
    const theme = useTheme();
    const [value1, setValue1] = React.useState(0);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const productImage = images.find(image => image.id === params.id);
        setTotalImages(productImage?.images)
    }, [params.id]);



    const [post, setPost] = useState(allData);

const fetchImages = (electronicId) => {
  // Fetch the images for the specified electronic ID
  fetch(`https://electrikacomputers.co.ke/backend/php/viewelectronic.php?electronicId=${electronicId}`)
    .then(response => response.json())
    .then(data => setPost(data))
    .catch(error => console.error(error));
};

useEffect(() => {
  // Call the fetchImages function initially to load the images
  fetchImages(params.id);

  // Set up an interval to fetch images at regular intervals (e.g., every 5 seconds)
  const interval = setInterval(() => {
    fetchImages(params.id);
  }, 1000); // Adjust the interval time as needed

  // Clean up the interval on component unmount
  return () => {
    clearInterval(interval);
  };
}, [params.id]);

const [images1, setImages1] = useState([]);

const fetchImages1 = (electronicId) => {
  // Fetch the images for the specified electronic ID
  fetch(`https://electrikacomputers.co.ke/backend/php/getimages.php?electronicId=${electronicId}`)
    .then(response => response.json())
    .then(data => setImages1(data))
    .catch(error => console.error(error));
};

useEffect(() => {
  // Call the fetchImages function initially to load the images
  fetchImages1(params.id);

  // Set up an interval to fetch images at regular intervals (e.g., every 5 seconds)
  const interval = setInterval(() => {
    fetchImages(params.id);
  }, 1000); // Adjust the interval time as needed

  // Clean up the interval on component unmount
  return () => {
    clearInterval(interval);
  };
}, [params.id]);


  
  
    const handleChange1 = (event, newValue) => {
      setValue1(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue1(index);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    

    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: params.id,
        name:post[0]?.title,
        amount:amount,
        description:post[0]?.description,
        link: `https://electrikacomputers.co.ke/product-view/${params.id}`,
        price: post[0]?.discount === true ? post[0]?.finalPrice : post[0]?.initialPrice,
        image: images1.length === 0 ? "https://firebasestorage.googleapis.com/v0/b/electrika-store.appspot.com/o/electrika-welcome.jpg?alt=media&token=34abff30-6591-4eef-a761-7b76bd78b982" : images1[0]?.image_url,
        received:false,
      });
    };


    const paragraphStyle = {
      marginBottom: '1.5em' // Adjust the spacing as needed
    };
  
    const paragraphs = post[0]?.description?.split('\n\n').map((paragraph, index) => (
      <p key={index} style={paragraphStyle}>{paragraph}</p>
    ));

    
  return (
    <>
    <Helmet>
    <title>{`${post[0]?.title}  |  Electrika Computers`}</title>
    <meta name="description" content={post[0]?.title.slice(0, 100)} />
    <meta property="twitter:image" content={totalImages[0]?.image_url} />
    <meta property="og:image" content={totalImages[0]?.image_url} />
    
    {/* Open Graph meta tags */}
    <meta property="og:title" content={post[0]?.title}  />
    <meta property="og:description" content={post[0]?.title.slice(0, 100)} />
    <meta property="og:image" content={totalImages[0]?.image_url}  />

    {/* Twitter Card meta tags */}
    <meta name="twitter:title" content={post[0]?.title} />
    <meta name="twitter:description" content={post[0]?.title.slice(0, 100)} />
    <meta name="twitter:image" content={totalImages[0]?.image_url}  />
  </Helmet>
    <div className="header_sticky">
        <div className="boxed">
          <div className="overlay" />

          <section  className="flat-breadcrumb product-view">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul className="breadcrumbs">
                    <li className="trail-item">
                      <Link href="/" title>Home</Link>
                      <span><img src="/images/icons/arrow-right.png" alt="" /></span>
                    </li>
                    <li className="trail-item">
                      <Link href="/shopping/1" title>Shop</Link>
                      <span><img src="/images/icons/arrow-right.png" alt="" /></span>
                    </li>
                    <li className="trail-end">
                      <Link href="#" title>Smartphones</Link>
                    </li>
                  </ul>{/* /.breacrumbs */}
                </div>{/* /.col-md-12 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </section>{/* /.flat-breadcrumb */}
          <main id="single-product">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                <div className="sidebar ">
                <div className="widget widget-categories">
                  <div className="widget-title">
                    <h3>Categories<span /></h3>
                  </div>
                  <ul className="cat-list style1 widget-content">
                  {datas.map((data, index) => {
                    return (
                      <>
                      <li>
                      <Link href={`/category/${data.id}/1`}>
                        <span >
                          {data.name}
                        </span>
                      </Link>
                      </li>
                      </>
                      )
                    }
                  )}
                  </ul>{/* /.cat-list */}
                </div>{/* /.widget-categories */}
                <div className="widget widget-banner">
                  <div className="banner-box">
                    <div className="inner-box">
                      <Link href="/shopping/1" title>
                        <img src="/images/slider/search-03.jpg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>{/* /.widget widget-banner */}
              </div>{/* /.sidebar */}
                </div>{/* /.col-lg-3 col-md-4 */}
                {post[0] ?(
                  <div className="col-lg-9 col-md-8">
                  <div className="flat-product-detail">
                    <div style={{
                      display:'flex',
                       flexWrap:'wrap',
                    }}>
                      <div className="box-flexslider">
                        <div className="flexslider">
                          <ul className="slides">
                            <Info images={totalImages}/>
                          </ul>{/* /.slides */}
                        </div>{/* /.flexslider */}
                      </div>{/* /.box-flexslider */}
                      <div className="product-detail style5">
                        <div className="header-detail">
                          <h4 className="name">{post[0]?.title}</h4>
                          <div className="reviewed">
                            <div className="review">
                              <div className="queue">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                              </div>
                              <div className="text">
                                <span>1 Review(s)</span>
                              </div>
                            </div>
                            <div className="status-product">
                              Availablity <span>In stock</span>
                            </div>
                          </div>
                        </div>{/* /.header-detail */}
                        <div className="content-detail">
                          <div className="price">
                            <div className="sale">
                              Ksh{commaNumber(post[0]?.initialPrice)}
                            </div>
                          </div>
                          {post[0]?.category === 'Laptop' || post[0]?.category === 'Desktop' ?(
                            <>
                            <div style={{marginTop:15}} className="product-id">
                            Category: <span className="id">{post[0]?.category}</span>
                          </div>
                            <div  className="product-id">
                            OS: <span className="id">{post[0]?.os}</span>
                          </div>
                          <div  className="product-id">
                          Processor: <span className="id">{post[0]?.processor}</span>
                        </div>
                        <div  className="product-id">
                        RAM: <span className="id">{post[0]?.ram}</span>
                      </div>
                      <div  className="product-id">
                      Storage: <span className="id">{post[0]?.storage}</span>
                    </div>        
                            </>

                          ):(
                            <>
                            <div style={{marginTop:15}} className="product-id">
                            Category: <span className="id">{post[0]?.category}</span>
                          </div>
                            </>
                          )}
                        </div>{/* /.content-detail */}
                        <div className="footer-detail">
                        <div style={{ display:'flex',alignItems:'center'}} className="box-cart style2">
                        <div className="btn-add-cart">
                        <MealItemForm id = {params.id} onAddToCart={addToCartHandler} title={post[0]?.title}/>
                        </div>
                        <div className="compare-wishlist">
                          <Link href="#" className="wishlist" title><img src="/images/icons/wishlist.png" alt="" />Wishlist</Link>
                        </div>
                      </div>

                          <div style={{display:'flex',alignItems:'center'}} className="social-single">
                            <ul className="social-list style2">
                              <li>
                              <WhatsappShareButton
                              title={`${post[0]?.title}`}
                              url={`https://electrikacomputers.co.ke/product-view/${params.id}`}
                              hashtag={"#Electrika_Computers_Your_Tech_Hub"}
                                description={`${post[0]?.description} `}
                              >
                               <WhatsappIcon size={32} round />
                             </WhatsappShareButton>
                              </li>
                              <li>
                              <TwitterShareButton
                              title={`${post[0]?.title}`}
                              url={`https://electrikacomputers.co.ke/product-view/${params.id}`}
                              hashtag={"#Electrika_Computers_Your_Tech_Hub"}
                                description={`${post[0]?.description} `}
                              >
                               <TwitterIcon size={32} round />
                             </TwitterShareButton>
                              </li>
                              <li>
                              <FacebookShareButton
                              title={`${post[0]?.title}`}
                              url={`https://electrikacomputers.co.ke/product-view/${params.id}`}
                              hashtag={"#Electrika_Computers_Your_Tech_Hub"}
                                description={`${post[0]?.description} `}
                             >
                               <FacebookIcon size={32} round />
                             </FacebookShareButton>
                              </li>
                              <li>
                              <LinkedinShareButton
                              title={`${post[0]?.title}`}
                              url={`https://electrikacomputers.co.ke/product-view/${params.id}`}
                              hashtag={"#Electrika_Computers_Your_Tech_Hub"}
                                description={`${post[0]?.description} `}
                              >
                               <LinkedinIcon size={32} round />
                             </LinkedinShareButton>
                              </li>
                            </ul>
                          </div>
                        </div>{/* /.footer-detail */}
                      </div>{/* /.product-detail style5 */}
                    </div>{/* /.row */}
                  </div>{/* /.flat-product-detail */}
                  <div style={{marginTop:0}} className="flat-product-content style2">
                  <Box sx={{ bgcolor: 'background.paper' }}>
                  <AppBar position="static">
                    <Tabs
                      value={value1}
                      onChange={handleChange1}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                    >
                      <Tab label="Descriptions" {...a11yProps(0)} />
                      <Tab label="Reviews" {...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value1}
                    onChangeIndex={handleChangeIndex}
                    style={{
                        height:450,
                        overflowY:'auto'
                    }}
                  >
                    <TabPanel value={value1} index={0} dir={theme.direction}>
                    <div class="info-text">
                      {paragraphs}
                    </div>
                    </TabPanel>
                    <TabPanel value={value1} index={1} dir={theme.direction}>
                      <Reviews />
                    </TabPanel>
                   </SwipeableViews>
                </Box>
                  </div>{/* /.flat-product-content style2 */}
                </div>
                ):(
               <div style={{
                display:'table',
                margin:'auto',
                marginTop:100,
               }}>
               <Box sx={{ display: 'flex' }}>
               <CircularProgress />
             </Box>
               </div>
                )}

              </div>{/* /.row */}
            </div>{/* /.container */}
          </main>{/* /#single-product 
        
          <Related category={product?.category} />
        */}
       
        </div>{/* /.boxed */}
        {/* Javascript */}
      </div>
      </>
  )
}

export default Product