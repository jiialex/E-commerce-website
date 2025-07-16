import { useContext } from 'react';
import { shopContext } from '../context/shopContext';
import Search from '../assets/search.png';
import cross from '../assets/cross.png';
import '../stylecss/searchbar.css';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(shopContext);

  if (!showSearch) return null;

  return (
    <div>
      <div className='search'>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className='input' 
          placeholder="Search..." 
        />
        <img src={Search} alt='Search icon' />
         <img 
        onClick={() => setShowSearch(false)} 
        className='show' 
        src={cross} 
        alt='Close search' 
      />
      </div>
     
    </div>
  );
}

export default SearchBar;
