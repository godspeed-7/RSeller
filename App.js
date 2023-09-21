import React, { useState } from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
<WelcomeScreen/>
  );
}
