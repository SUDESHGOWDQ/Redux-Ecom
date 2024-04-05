import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartProduct = useSelector((state)=>state.Product.cart)
  console.log(cartProduct);
  return (
    <div className='Navbar'>
      <nav>
        <div className='navdiv'><h1><Link to='/'  style={{textDecoration:'none',color:'black'}}>Shop Here</Link></h1></div>
        <div className='navdiv'><Link to='/cart' style={{textDecoration:'none',color:'black'}}>Cart <sup>{cartProduct.length}</sup></Link></div>
      </nav>
    </div>
  )
}

export default Navbar
