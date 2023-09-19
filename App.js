import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/components/MessageScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppText from './app/components/AppText';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';

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
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        placeholder="Category"
        icon="apps"
        items={categories}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
