import Logo from '../assets/Logo.png'
import '../stylecss/Navbar.css'
import cart from '../assets/cart.png'
import person from '../assets/person.png'
import search from '../assets/search.png'
import like from '../assets/favourite.png'
import { useState,useEffect } from 'react'
import menu from '../assets/menu.png'

function Navbar() {
   const [cartItems, setCartItems] = useState([]);
   const [showDropdown, setShowDropDown] = useState(false);
   const [isSidebarVisisble,setSidebarVisible] = useState(false);

   useEffect(()=> {
    console.log('cart updated:' , cartItems)
   }, [cartItems])

   const handleCartClick = () =>{
    const newItems = { id: cartItems.length + 1, name:'new product'}
    const updatedCart = [...cartItems,newItems];
    setCartItems([updatedCart]);
    console.log('cart:', updatedCart);
   }
   const handlePersonClick = () =>{
    setShowDropDown(!showDropdown);
   }
   const handleSearchClick = () => {
    const keyword = prompt('what are you searching for?');
    if(keyword){
      console.log(`searching for '${keyword}'`);
    }
   }
   const handleHeartClick = () => {
   console.log("heart icon clicked");
   }
  return (
    <div className='nav'>
        <img src={Logo} className='for' alt="" />   
      <div className='navbar'>
         <a href='/'>HOME</a>
         <a href='collection'>COLLECTION</a>
         <a href='about'>ABOUT</a>
         <a href='contact'>CONTACT</a>
      </div>
      <div className='icons'>
        <img src={cart} onClick={handleCartClick} alt=""/>
        <img src={person} onClick={handlePersonClick} alt=""/>
        {showDropdown && (
        <div className='drop-down'>
          <a href=''>My Profile</a>
          <a href=''>Orders</a>
          <a href=''>Logout</a>
          </div>
)}
        <img src={search} onClick={handleSearchClick} alt=""/>
        <img src={like} onClick={handleHeartClick} alt=""/>
        <img className='menu-icon' src={menu} onClick={()=>setSidebarVisible(true)} alt=''/>
      </div>
    {isSidebarVisisble && (
      <div className='side-bar open'>
        <button onClick={()=>setSidebarVisible(false)}>✕ close</button>
        <a href='/'>Home</a>
        <a href='collection'>Collection</a>
        <a href='about'>About</a>
        <a href='contact'>Contact</a>
 </div>
    )}

      </div>
   
  )
}
export default Navbar
