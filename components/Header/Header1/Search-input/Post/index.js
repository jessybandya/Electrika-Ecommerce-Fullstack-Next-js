// components/Search.js

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import '../styles.css';
import Link from 'next/link';
import SearchSuggestions from '../../Search-Suggestion';
import FetchImages from './FetchImages';

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


const Post = ({ data, images, showSearch }) => {
  const navigate = useRouter();
  const [posts1, setPosts1] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
     
      setPosts1(data);
    };

    fetchData();
  }, [data]);

  useEffect(() => {
    const fetchImagesAndFilter = async () => {
      if (posts1?.length > 0) {
        const postsWithImages = await Promise.all(
          posts1.map(async (res) => {
            const id = res.id;
            const imagesForID = images.find(img => img.id === id)?.images || []; // Find images by matching ID
            return {
              ...res,
              images: imagesForID,
            };
          })
        );
  
        setFilteredPosts(
          postsWithImages.filter((res) =>
            res?.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredPosts([]);
      }
    };
  
    fetchImagesAndFilter();
  }, [searchTerm, posts1, images]);


  const updateSearchResults = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePostClick = (post) => {
    setShowSuggestions(false); // Hide suggestions on click
    navigate.push(`/product-view/${post.id}`);
  };

  const handleOutsideClick = (e) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
    {showSearch === true ?(
      <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={updateSearchResults}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Search"
      />

      <ul className={`suggestions ${showSuggestions ? 'active' : ''}`} ref={suggestionsRef}>
        <span style={{ color: '#000' }}>Search results: {filteredPosts.length}</span>
        {searchTerm ? (
          <>
            {filteredPosts.map((post, index) => (
              <li style={{ display: 'flex', alignItems: 'center' }} key={post.id} onClick={() => handlePostClick(post)}>
                <div className="image">
                  <FetchImages index={index} electronicId={post.id} title={post.title} images={post.images}/>
                </div>
                <div style={{ marginLeft: 10 }} className="info-product">
                  <div className="name">
                    <Link
                      href={`/product-view/${post.id}`}
                      style={{
                        fontSize: 13,
                        color: '#10BBE5',
                      }}
                      title
                    >
                      {post.title}
                      <span style={{ marginLeft: 5, marginRight: 5 }}>-</span>
                      <span style={{ fontWeight: 'bold' }}>{post.category}</span>
                    </Link>
                  </div>
                  <div className="price">
                    <span style={{ fontSize: 16 }} className="sale">
                      Ksh{numberWithCommas(post.initialPrice)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <SearchSuggestions data={data} images={images}/>
        )}
      </ul>
    </div>
    ):(
      <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={updateSearchResults}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Search"
      />

      <ul className={`suggestions ${showSuggestions ? 'active' : ''}`} ref={suggestionsRef}>
        <span style={{ color: '#000' }}>Search results: {filteredPosts.length}</span>
        {searchTerm ? (
          <>
            {filteredPosts.map((post, index) => (
              <li style={{ display: 'flex', alignItems: 'center' }} key={post.id} onClick={() => handlePostClick(post)}>
                <div className="image">
                  <FetchImages index={index} electronicId={post.id} title={post.title} images={post.images}/>
                </div>
                <div style={{ marginLeft: 10 }} className="info-product">
                  <div className="name">
                    <Link
                      href={`/product-view/${post.id}`}
                      style={{
                        fontSize: 13,
                        color: '#10BBE5',
                      }}
                      title
                    >
                      {post.title}
                      <span style={{ marginLeft: 5, marginRight: 5 }}>-</span>
                      <span style={{ fontWeight: 'bold' }}>{post.category}</span>
                    </Link>
                  </div>
                  <div className="price">
                    <span style={{ fontSize: 16 }} className="sale">
                      Ksh{numberWithCommas(post.initialPrice)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <SearchSuggestions data={data} images={images}/>
        )}
      </ul>
    </div>
    )}
   </>
  );
};

export default Post;
