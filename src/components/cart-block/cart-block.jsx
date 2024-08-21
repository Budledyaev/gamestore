import React from 'react'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'

export const CartBlock = () => {
  return (
    <div className='cart-block'>
        <BiCartAlt size={22} className='cart-block__icon'/> 
        <span className='cart-block__total-price'>2343 rub.</span>
        
    </div>
  )
}

