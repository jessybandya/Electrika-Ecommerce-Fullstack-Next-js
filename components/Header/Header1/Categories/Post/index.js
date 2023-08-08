import Link from 'next/link'
import React from 'react'

function Post({ electronicID, images, title, initialPrice}) {
    const commaNumber = require('comma-number')


  return (
    <li>
    <div style={{display:'flex',alignItems:'center'}}>
    <div className="image">


    </div>{/* /.box-image */}
  <div className="info-product">
    <div className="name">
      <Link href={`/product-view/${electronicID}`} title>{title}</Link>
    </div>
    <div className="price">
      <span style={{
        fontSize:14,
        color:'#10BBE5'
      }} className="sale">
        Ksh{commaNumber(initialPrice)}
      </span>
    </div>
  </div>
    </div>
  </li>
  )
}

export default Post