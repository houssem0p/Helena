import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
    <Routes>
       <Route path = '/' element={<Home/>}/>
       <Route path='/collection' element={<Collection/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/place-order' element={<PlaceOrder/>}/>
       <Route path='/orders' element={<Orders/>}/>
       <Route path="/product/:ProductId" element={<Product />} />



    </Routes>
    <Footer />
    </div>
  )
}

export default App