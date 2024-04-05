import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeProduct } from '../app/ProductSlice';





const Cart = () => {
  const dispatch = useDispatch()
  const datas = useSelector((state)=>state.Product.cart)
  console.log(datas);

  function removeCart(id){
    dispatch(removeProduct(id))
  }


  

  return (
    <div className='cart'>
      <center>
      <table border={'1'} cellPadding={'10'} cellSpacing={'10'}>
       <thead>
        <tr>
          <td>Name</td>
          <td>Image</td>
          <td>Price</td>
          <td>Delete</td>
        </tr>
       </thead>
        <tbody>
        {(datas.length>0)?(
          datas.map((data)=>{
          return(
            <tr key={data.id}>
            <td>{data.title}</td>
            <td><img src={data.image} alt='' height={'100px'} width={'100px'}/></td>
            <td>{data.price}</td>
            <td><button onClick={()=>removeCart(data.id)}>Delete</button></td>
          </tr>
          )
        })
        ):(<center>No products were Added</center>)}
        </tbody>
       </table>
      </center>
    </div>
  )
}

export default Cart
