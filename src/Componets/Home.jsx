import React, { useEffect, useState } from 'react'
import './Home.css'
import { useSelector,useDispatch} from 'react-redux'
import { addProduct } from '../app/ProductSlice'
import { getAllProducts } from '../app/DataSlice'

const Home = () => {
  const data = useSelector((state)=>state.Data.data)
  const cart = useSelector((state)=>state.Product.cart)
  const dispatch = useDispatch()
  console.log(cart);
  console.log(data);


  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  const addCart = (data)=>{
    dispatch(addProduct(data));
  }



  return (
    <div className='Home'>
      {(typeof data !== "undefined" && data.length > 0 )?(data.map((data)=>{
       return(
        <div className='cards' key={data.id}>
          <img src={data.image} alt='' height={'200px'} width={'200px'}></img>
          <h6>Name:{data.title}</h6>
          <p>Price:{data.price}</p>
          <button onClick={()=>addCart(data)}>Add cart</button>
        </div>
       )
      })):("NO DATA")}
    </div>
  )
}

export default Home
