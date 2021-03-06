import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailsNav from './components/screens/LogIn';
import NGOsNearby from './components/screens/NGOsNearby';
import CustomStatusBar from './components/other/CustomStatusBar';
import LogIn from './components/screens/LogIn'
import SignUp from './components/screens/SignUp'
import InformationShared from './components/screens/InformationShared';

export default function App() {
  return (
    <NavigationContainer>
      <CustomStatusBar />
      <DetailsNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
