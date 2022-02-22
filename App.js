import React from 'react';

import Navigation from './routes/RouteContainer';

import { AuthorizationProvider } from './context/AuthorizationContext';

export default function App() {
  return (
    <AuthorizationProvider>
      <Navigation />
    </AuthorizationProvider>
  );
}
