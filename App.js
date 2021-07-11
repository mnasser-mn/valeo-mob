import React from 'react';

import AppRouter from './src/components/app-router';

import AppProvider from './src/store';

export default function App() {

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
