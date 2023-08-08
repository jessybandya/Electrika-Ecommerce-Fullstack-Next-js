import React from 'react';
import Image from 'next/image';
import Post from './Post';


export default function SearchInput({ data,images, showSearch }){
  
  return (
    <div>
    <Post data={data} images={images} showSearch={showSearch}/>
    </div>
  );
}