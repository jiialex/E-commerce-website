import Logo from '../assets/Logo.png'
import '../stylecss/Navbar.css'
import cart from '../assets/cart.png'
import person from '../assets/person.png'
import search from '../assets/search.png'
import like from '../assets/favourite.png'
import { useState,useEffect } from 'react'

function Navbar() {
   const [cartItems, setCartItems] = useState([]);

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
    alert('profile viewed trigerred!');
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
        <img src={search} onClick={handleSearchClick} alt=""/>
        <img src={like} onClick={handleHeartClick} alt=""/>

      </div>
    </div>
  )
}
export default Navbar
