import React, { useState, useContext } from 'react';

const FavouritesContext = React.createContext();

export const useFavourites = () => {
  return useContext(FavouritesContext);
}

export const FavouritesProvider = ({children}) => {
	const [favourites, setFavourites] = useState([]);
	
  const addToFavourites = (title) => {
    setFavourites(previousFavourites => setFavourites([...previousFavourites, title]))
  }

	return (
    <FavouritesContext.Provider value={[favourites, addToFavourites]}>
      {children}
    </FavouritesContext.Provider>
  )
};
