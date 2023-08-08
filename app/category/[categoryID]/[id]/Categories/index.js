"use client"
import React, { useEffect, useState } from 'react'
import {datas} from '@assets/data/categories/data'
import { CircularProgress, Slider } from '@mui/material'
import Post from './Post';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Link from 'next/link';


function valuetext(value) {
  return `Ksh${value}`;
}
function Categories({ params, allData, images }) {
  const [value, setValue] = React.useState([16000, 100000]);
  const [posts, setPosts] = useState([])
  const [posts1, setPosts1] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9); // Number of posts to display per page
  const [visiblePages, setVisiblePages] = useState(5); // Number of visible pagination links

  



  const fetchData = async (id) => {
    try {
      const laptops = allData.filter(item => item.category === id);
      const postsWithImages = await Promise.all(laptops.map(async (item, index) => {
        const id = item.id;
        const imagesForID = images.find(img => img.id === id)?.images || []; // Find images by matching ID
        
        return {
          id: index + 1,
          post: item,
          images: imagesForID,
        };
      }));

      setPosts(postsWithImages);

    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
  
    // Fetch data initially
    fetchData(params.categoryID);
  }, [params.categoryID]);



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

    const pageTitle = `Category: ${params.categoryID}  |  Electrika Computers`
    const pageDescription = `Category: ${params.categoryID}  |  Electrika Computers`;
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
                          {data.id === params.categoryID ?(
                            <li>
                            <Link  href={`/category/${data.id}/1`} onClick={()=> fetchData(data.id)}>
                              <span style={{fontWeight:'bold',color:'#0000FF'}}>
                                {data.name}
                              </span>
                            </Link>
                            </li>
                          ):(
                            <li>
                            <Link  href={`/category/${data.id}/1`} onClick={()=> fetchData(data.id)}>
                              <span >
                                {data.name}
                              </span>
                            </Link>
                            </li>
                          )}
                          </>
                          )
                        }
                      )}
                      </ul>{/* /.cat-list */}
                    </div>{/* /.widget-categories */}

                    <div className="widget widget-banner">
                      <div className="banner-box">
                        <div className="inner-box">
                          <a href="/shopping/1" title>
                            <img src="/images/slider/search-03.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>{/* /.widget widget-banner */}
                  </div>{/* /.sidebar */}
                </div>{/* /.col-lg-3 col-md-4 */}

                <div className="col-lg-9 col-md-8">
                <div className="main-shop">
                  <div style={{marginTop:20}} className="wrap-imagebox next-info1">
                    <div className="sort-product">
                      <ul className="icons">
                        <li>
                          <b>{params.categoryID}</b> Category - <b>{posts.length}</b> Products found
                        </li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                    <div className="tab-product">
                    <div className="row sort-box">
                      {currentPosts.length > 0 ? (
                        currentPosts.map(({ id, post, images }) => (
                          <Post
                          key={post.id}
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
                        <Link href={`/category/${params.categoryID}/${currentPage - 1}`}>&laquo;</Link>
                      </li>
                    )}
                    {getVisiblePageNumbers().map((pageNumber) => (
                      <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
                        <Link href={`/category/${params.categoryID}/${pageNumber}`}>{pageNumber}</Link>
                      </li>
                    ))}
                    {currentPage < totalPages && (
                      <li>
                        <Link href={`/category/${params.categoryID}/${currentPage + 1}`}>&raquo;</Link>
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
        {/* Javascript */}
      </div>
  )
}

export default Categories