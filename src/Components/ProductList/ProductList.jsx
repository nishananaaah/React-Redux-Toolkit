import React, { useState } from 'react'
import products from"../../API/products.json"
import BeforeCart from './CardButtons/BeforeCart'
import AfterCart from './CardButtons/AfterCart'
import "./ProductList.css"

const ProductList = () => {
    const [coount,setCount]=useState(0);

    const addToCart=()=>{
        setCount(1)
    }
  return (
    <div>
      <section className='container'>
{products.map((product,key)=>(
    <div className='product-container'key={key}>
        <img src={product.imageUrl} alt="" />
        <h3>{product.name}</h3>
        {coount>0?<AfterCart/>:<BeforeCart  addToCart={addToCart}/>}
        
   


    </div>
))}
      </section>
    </div>
  )
}

export default ProductList
