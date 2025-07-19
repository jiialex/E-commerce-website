import React, { useState } from 'react';
import '../stylecss/collection.css';
import p_img from '../assets/p_img.png';
import p_img1 from '../assets/p_img1.png';
import p_img2 from '../assets/p_img2.png';
import p_img3 from '../assets/p_img3.png';
import p_img4 from '../assets/p_img4.png';
import p_img5 from '../assets/p_img5.png';
import p_img6 from '../assets/p_img6.png';
import p_img7 from '../assets/p_img7.png';
import p_img8 from '../assets/p_img8.png';
import p_img9 from '../assets/p_img9.png';
import p_img10 from '../assets/p_img10.png';
import p_img11 from '../assets/p_img11.png';
import p_img12 from '../assets/p_img12.png';
import p_img13 from '../assets/p_img13.png';
import p_img14 from '../assets/p_img14.png';
import p_img15 from '../assets/p_img15.png';
import p_img16 from '../assets/p_img16.png';
import p_img17 from '../assets/p_img17.png';
import p_img18 from '../assets/p_img18.png';
import p_img19 from '../assets/p_img19.png';
import SearchBar from '../Components/SearchBar';
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer'
import OurPolicy from '../Components/OurPolicy';

const Collection = () => {
  const [ratings, setRatings] = useState({});
  const [cart, setCart] = useState([]);

  const handleRating = (itemId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [itemId]: prevRatings[itemId] === rating ? 0 : rating,
    }));
  };

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
    alert(`${item} has been added to your cart.`);
  };

  const collectionItems = [
    { id: 1, name: 'clothe1', image: p_img, price: '$49' },
    { id: 2, name: 'clothe2', image: p_img1, price: '$59' },
    { id: 3, name: 'clothe3', image: p_img2, price: '$39' },
    { id: 4, name: 'clothe4', image: p_img3, price: '$44.92' },
    { id: 5, name: 'clothe5', image: p_img4, price: '$54' },
    { id: 6, name: 'clothe6', image: p_img5, price: '$64' },
    { id: 7, name: 'clothe7', image: p_img6, price: '$34' },
    { id: 8, name: 'clothe8', image: p_img7, price: '$74' },
    { id: 9, name: 'clothe9', image: p_img8, price: '$84' },
    { id: 10, name: 'clothe10', image: p_img9, price: '$94' },
    { id: 11, name: 'clothe11', image: p_img10, price: '$29' },
    { id: 12, name: 'clothe12', image: p_img11, price: '$39' },
    { id: 13, name: 'clothe13', image: p_img12, price: '$49' },
    { id: 14, name: 'clothe14', image: p_img13, price: '$59' },
    { id: 15, name: 'clothe15', image: p_img14, price: '$69' },
    { id: 16, name: 'clothe16', image: p_img15, price: '$79' },
    { id: 17, name: 'clothe17', image: p_img16, price: '$89' },
    { id: 18, name: 'clothe18', image: p_img17, price: '$99.94' },
    { id: 19, name: 'clothe19', image: p_img18, price: '$109' },
    { id: 20, name: 'clothe21', image: p_img19, price: '$100' },
  ];

  return (
    <div>
      <div className='collection'>
        <h2>LATEST COLLECTIONS</h2>
        <p>The best collections and quality products</p>
        <SearchBar/>
      </div>
      <div className='image-container'>
        {collectionItems.map((item) => (
          <div className='box' key={item.id}>
            <div className='image'>
              <a href="#" className="fas fa-heart"></a>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '300px' }}
              />
            </div>

            <div className='content'>
              <div className='stars'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={star <= (ratings[item.id] || 0) ? 'fas fa-star' : 'far fa-star'}
                    onClick={() => handleRating(item.id, star)}
                     style={{
                      color: star <= (ratings[item.id] || 0) ? 'yellow' : '#ccc',
                      cursor: 'pointer',
                    }}
                  ></i>
                ))}
              </div>
              <button onClick={() => addToCart(item.name)} className='btn'>
                Add To Cart
              </button>
              <span className='price'>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <OurPolicy/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Collection;
