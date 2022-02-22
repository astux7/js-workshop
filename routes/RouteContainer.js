import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuthorization } from '../context/AuthorizationContext';

import AuthContainer from './AuthContainer';
import AppContainer from './AppContainer';

const RouteContainer = () => {
  const [isAuthorised] = useAuthorization();

  return (
    <NavigationContainer>
      {
        isAuthorised ? <AppContainer /> : <AuthContainer />
      }
    </NavigationContainer>
  )
}

export default RouteContainer;
