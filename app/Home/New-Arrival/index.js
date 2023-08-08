import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'

function Selling({ allData, images}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const laptops = allData.filter(item => item.category === 'Laptop');
        const postsWithImages = await Promise.all(laptops.slice(0, 6).map(async (item, index) => {
          const id = item.id;
          const imagesForID = images.find(img => img.id === id)?.images || []; // Find images by matching ID
          
          return {
            id: index + 1,
            post: item,
            images: imagesForID,
          };
        }));

        const shuffledPosts = shuffleArray(postsWithImages);
    
        setPosts(shuffledPosts);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    

    const shuffleDataPeriodically = () => {
      fetchData();
      const interval = setInterval(fetchData, 300000); // Set the interval time (in milliseconds) for shuffling data
      return () => clearInterval(interval); // Clear the interval when the component unmounts
    };

    fetchData();
    const shuffleTimer = shuffleDataPeriodically();

    return () => clearInterval(shuffleTimer); // Clear the shuffle timer when the component unmounts
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
  

  return (
    <div className="row">
      <div className="tab-product">
        <div className="row sort-box">
          {posts.length > 0 ? (
            posts.map(({ id, post, images }) => (
              <Post
              index={id}
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
              images={images}
              storage={post.storage}
              />
            ))
          ) : (
            <center>
              <i style={{ fontSize: 18, fontWeight: 'bold', color: '#2152ff' }}>Loading...</i>
            </center>
          )}
        </div>
      </div>
    </div>
  );
}

export default Selling;
