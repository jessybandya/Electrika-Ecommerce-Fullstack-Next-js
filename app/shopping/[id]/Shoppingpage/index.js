"use client"
import React, { useEffect, useState } from 'react';
import { CircularProgress, Slider } from '@mui/material';
import Post from './Post';
import Header from '@components/Header';
import {datas} from '@assets/data/categories/data';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header1 from '@components/Header/Header1';

function valuetext(value) {
  return `Ksh${value}`;
}

export const metadata = {
    title: 'Electrika Computers - Shopping',
    description: 'Your leading computer store in the heart of the city',
  }
function Shoppingpage( {params, allData, images} ) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9); // Number of posts to display per page
    const [visiblePages, setVisiblePages] = useState(5); // Number of visible pagination links
    const [value, setValue] = useState([15000, 100000]);
    const commaNumber = require('comma-number')
  
    const handleChange1 = (event, newValue) => {
      setValue(newValue);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const postsWithImages = await Promise.all(allData?.map(async (item, index) => {
            const id = item.id;
            const imagesForID = images?.find(img => img?.id === id)?.images || []; // Find images by matching ID
            return {
              id: index + 1,
              post: item,
              images: imagesForID,
            };
          }));

          const shuffledData = shuffleArray(postsWithImages);
      
          setPosts(shuffledData);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      // Fetch data initially
      fetchData();
  
      // Define the time interval in milliseconds (e.g., 5 minutes)
      const interval = 5 * 60 * 1000;
  
      // Fetch data periodically after the specified interval
      const fetchDataPeriodically = () => {
        fetchData();
        setTimeout(fetchDataPeriodically, interval);
      };
  
      // Start fetching data periodically
      const timer = setTimeout(fetchDataPeriodically, interval);
  
      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [allData]);
  
    // Function to shuffle an array randomly
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    useEffect(() => {
      if (params.id) {
        setCurrentPage(parseInt(params.id));
      } else {
        setCurrentPage(1);
      }
    }, [params.id]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    // Get current posts based on current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    const totalPages = Math.ceil(posts.length / postsPerPage);
  
    const getVisiblePageNumbers = () => {
      const halfVisiblePages = Math.floor(visiblePages / 2);
      let startPage = Math.max(currentPage - halfVisiblePages, 1);
      let endPage = Math.min(startPage + visiblePages - 1, totalPages);
  
      if (totalPages - endPage < halfVisiblePages) {
        startPage = Math.max(endPage - visiblePages + 1, 1);
      }
  
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const pageTitle = `Shopping - ${params.id}  |  Electrika Computers`
    const pageDescription = "Browse and buy the latest laptops & other electronics at our online store.";
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
      <div className="boxed">
      <div className="overlay" />
      <div className="divider30" />
      <section  className="flat-breadcrumb shopping-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumbs">
                <li className="trail-item">
                  <a href="#" title>Home</a>
                  <span><img src="/images/icons/arrow-right.png" alt="" /></span>
                </li>
                <li className="trail-item">
                  <a href="#" title>Shop</a>
                </li>
  
              </ul>{/* /.breacrumbs */}
            </div>{/* /.col-md-12 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.flat-breadcrumb */}
      <main id="shop">
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
                <div className="widget widget-price">
                  <div className="widget-title">
                    <h3>Price<span /></h3>
                  </div>
                  <div className="widget-content">
                    <p>Price</p>
                    <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={400000}
                    step={100}
                  />
                  <p>
                    Ksh{commaNumber(value[0])} - Ksh{commaNumber(value[1])}
                  </p>
                  </div>
                </div>{/* /.widget widget-price */}
                <div className="widget widget-banner">
                  <div className="banner-box">
                    <div className="inner-box">
                      <a title>
                        <img src="/images/slider/search-03.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>{/* /.widget widget-banner */}
              </div>{/* /.sidebar */}
            </div>{/* /.col-lg-3 col-md-4 */}
            <div className="col-lg-9 col-md-8">
              <div className="main-shop">
              <div className='slider-shopping'>
              <div style={{height:330,marginTop:-20}} className="slider slider-shopping owl-carousel-16">
              <img src="/images/slider/slider-01.jpg" alt="" />
              <img src="/images/slider/slider-03.jpg" alt="" />
              <img src="/images/slider/slider-04.jpg" alt="" />
            </div>{/* /.slider */}
              </div>
                <div style={{marginTop:0}} className="wrap-imagebox next-info1">
                  <div className="sort-product">
                    <ul className="icons">
                      <li>
                        <img src="/images/icons/list-1.png" alt="" />
                      </li>
                    </ul>
                    <div className="sort">
                      <div className="popularity">
                        <select name="popularity">
                          <option value>Sort by recent</option>
                          <option value>Sort by highly rated</option>
                          <option value>Sort by more selling</option>
                        </select>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div style={{marginTop:-10}} className="tab-product">
                  <div className="row sort-box">
                    {currentPosts?.length > 0 ? (
                      currentPosts?.map(({ id, post, images }) => (
                        <Post
                        index={id}
                        key={id}
                        electronicID={post.id}
                        description={post.description}
                        initialPrice={post.initialPrice}
                        finalPrice={post.finalPrice}
                        title={post.title}
                        discount={post.discount}
                        image={post.image}
                        timestamp={post.timestamp}
                        category={post.category}
                        percentage={post.percentage}
                        os={post.os}
                        processor={post.processor}
                        ram={post.ram}
                        storage={post.storage}
                        images={images}
                        />
                      ))
                    ) : (
                      <center style={{
                        display:'table',
                        margin:'auto'
                      }}>
                        <CircularProgress />
                      </center>
                    )}
                  </div>
                </div>
                </div>{/* /.wrap-imagebox */}
                <div className="blog-pagination">
                <ul className="flat-pagination">
                  {currentPage > 1 && (
                    <li>
                      <Link href={`/shopping/${currentPage - 1}`}>&laquo;</Link>
                    </li>
                  )}
                  {getVisiblePageNumbers().map((pageNumber) => (
                    <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
                      <Link href={`/shopping/${pageNumber}`}>{pageNumber}</Link>
                    </li>
                  ))}
                  {currentPage < totalPages && (
                    <li>
                      <Link href={`/shopping/${currentPage + 1}`}>&raquo;</Link>
                    </li>
                  )}
                </ul>
              </div>
              </div>{/* /.main-shop */}
            </div>{/* /.col-lg-9 col-md-8 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </main>{/* /#shop */}
    </div>{/* /.boxed */}
      </div>
  )
}

export default Shoppingpage