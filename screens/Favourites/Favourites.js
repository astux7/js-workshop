import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';

import { useFavourites } from '../../context/FavouritesContext';

const Favourites = () => {
  const [favourites] = useFavourites();


  return (
    <SafeAreaView>
      <Text>Favourites</Text>
      {
        favourites.map(favourite => <Text>{favourite}</Text>)
      }      
    </SafeAreaView>
  );
}

export default Favourites;
