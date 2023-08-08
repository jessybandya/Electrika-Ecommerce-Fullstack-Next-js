import React, { useEffect, useState } from 'react'
import { db } from '@auth/firebase';
import Post from './Post';

function Viewed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      db.collection('electronics').limit(4).onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
              id: doc.id,
              post: doc.data(),
          })));
      })
  }, []);
  return (
    <div className="rows style1">	

    {
        // hakuna > || iko < 
        posts.length > 0 ?(
          <>
          {
                         posts.map(({id, post}) => (
                            <Post
                            key={id} 
                            category={post.category}
                            description={post.description}
                            electronicID={id}
                            images={post?.images}
                            title={post.title}
                            initialPrice={post.initialPrice}
                            finalPrice={post.finalPrice}
                            timestamp={post?.timestamp}
                            posts={posts}
                            />
                          ))
          }
          </>
        ) : (<>  <center><i style={{fontSize:18,fontWeight:'bold',color:'#2152ff'}}>Loading...</i></center>
        </>)  
  }   

  </div>
  )
}

export default Viewed