import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <View style={{marginTop: 40}}>
      <AppButton title='login' onPress={() => console.log('here')}/>
    </View>
  );
}