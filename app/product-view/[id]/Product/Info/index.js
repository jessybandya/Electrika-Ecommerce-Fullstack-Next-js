import React, { useEffect, useState } from 'react'
import ImageCarousel from './Images';


function Info({images}) {


  return (
    <ImageCarousel images={images} />
  )
}

export default Info