import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Componets/Navbar'
import Home from './Componets/Home'
import Cart from './Componets/Cart'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
