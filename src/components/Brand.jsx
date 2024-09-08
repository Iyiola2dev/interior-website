import React from 'react'
import Brand1 from '../assets/brand/1.png'
import Brand2 from '../assets/brand/2.png'
import Brand3 from '../assets/brand/3.png'
import Brand4 from '../assets/brand/4.png'
import Brand5 from '../assets/brand/5.png'

const Brand = () => {
  return (
   <div className="container">
    <div>
        <img src={Brand1} alt="brand" />
        <img src={Brand2} alt="brand" />
        <img src={Brand3} alt="brand" />
        <img src={Brand4} alt="brand" />
        <img src={Brand5} alt="brand" />
    </div>
   </div>
  )
}

export default Brand