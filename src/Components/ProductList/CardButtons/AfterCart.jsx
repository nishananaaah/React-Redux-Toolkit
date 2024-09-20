import React from 'react'
import "./CartButtons.css"

const AfterCart = () => {
  return (
    <div class="product-container">
    <div class="after-cart">
        <button class="cart-counter-button">-</button>
        <span class="cart-count">0</span>
        <button class="cart-counter-button">+</button>
    </div>
    <button class="add-cart-button">Add to Cart</button>
</div>

  )
}

export default AfterCart
