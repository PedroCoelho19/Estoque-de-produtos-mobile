import React, { useState } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Routes from './src/routes/tab.navigation';

import SignIn from './src/screens/SignIn'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
      {/* <Header/> */}
      <SignIn/>
      {/* <Footer /> */}
    </NavigationContainer>
  );
}