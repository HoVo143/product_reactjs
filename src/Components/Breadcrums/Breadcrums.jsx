import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = ({product}) => {
    // const {product} = props;

  return (
    <div className='breadcrums'>
        HOME <img src={arrow_icon}/>
        SHOP <img src={arrow_icon}/> 
        {product.category}<img src={arrow_icon}/>
        {product.name} 
    </div>
  )
}

export default Breadcrums