import React, { useEffect, useState } from 'react'
import { db } from '../../../auth/firebase';
import Post from './Post';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Link from 'next/link';

function Categories({ data, id }) {

  return (
    <div>
    <ul>
    {data.length === 0 ?(
       <div style={{
        display:'table',
        margin:'auto',
        marginTop:'20px'
       }}>
       <Box sx={{ display: 'flex' }}>
       <CircularProgress />
     </Box>
       </div>
    ):(
      <>
      {
        data.map(({ id, post }) => (
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
            />
          ))
        
    }
      </>
    )}
  </ul>
  <div className="show">
  <Link href={`/category/${id}/1`} title>Shop All</Link>
</div>
    </div>
  )
}

export default Categories