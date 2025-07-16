import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Collection from './Pages/collection'
import About from './Pages/About'
import Contact from './Pages/contact'
import Product from './Pages/product'
import Cart from './Pages/cart'
import Login from './Pages/login'
import PleaseOrder from './Pages/pleaseOrder'
import Orders from './Pages/orders'
import Navbar from './Components/Navbar'
import { ShopProvider } from './context/shopContext';

function App() {
  return (
    <ShopProvider>
    <BrowserRouter>
    <div className='app'>
         <Navbar />
    <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/collection' element={<Collection />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/product/:productId' element={<Product />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/login' element={<Login />} />
  <Route path='/place-order' element={<PleaseOrder />} />
  <Route path='/orders' element={<Orders />} />
</Routes>

    </div>
    </BrowserRouter>
    </ShopProvider>
  )
}

export default App
