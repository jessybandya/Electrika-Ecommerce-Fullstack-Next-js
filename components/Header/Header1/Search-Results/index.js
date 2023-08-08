import React from 'react'
import Post from './Post'

function Searchresults({ filteredPosts, searchTerm }) {
  return (
    <div className="box-suggestions">
      <ul>
          {
           filteredPosts.length > 0 ?(
             <>
             {
                             filteredPosts.map((posts2) => (
   
   <Post 
   key={posts2.id}
   electronicID={posts2.id}
   description={posts2.description}
   initialPrice={posts2.initialPrice}
   finalPrice={posts2.finalPrice}
   title={posts2.title}
   discount={posts2.discount}
   image={posts2.image}
   timestamp={posts2.timestamp}
   category={posts2.category}
   percentage={posts2.percentage}
   os={posts2.os}
   processor={posts2.processor}
   ram={posts2.ram}
   storage={posts2.storage}
   images={posts2.images}
   />
   ))
                             }
             </>
           ):(
             <><h5 style={{color:'red'}}>No results...</h5></>
           )       
         
         }
      </ul>
    </div>
  )
}

export default Searchresults