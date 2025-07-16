import { createContext, useState } from 'react';

export const shopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true); 

  return (
    <shopContext.Provider value={{ search, setSearch, showSearch, setShowSearch }}>
      {children}
    </shopContext.Provider>
  );
};
